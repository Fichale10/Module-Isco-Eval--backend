 const db = require("../config/db");


exports.createEvaluation = async (req, res) => {
  const { employee_id, criteres } = req.body;
  // criteres = [{ critere_id: 1, note: 4 }, ...]

  try {
    const insertEval = `
      INSERT INTO evaluations (employee_id, date_evaluation, evaluateur_id)
      VALUES ($1, NOW(), $2)
      RETURNING id
    `;

    const evalResult = await db.query(insertEval, [employee_id, req.user.id]);
    const evaluation_id = evalResult.rows[0].id;

    for (const c of criteres) {
      await db.query(
        `
        INSERT INTO evaluation_details (evaluation_id, critere_id, note)
        VALUES ($1, $2, $3)
        `,
        [evaluation_id, c.critere_id, c.note]
      );
    }

    res.json({ message: "Évaluation enregistrée", evaluation_id });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur." });
  }
};

