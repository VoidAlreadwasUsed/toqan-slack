import express from "express";
import axios from "axios";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bot rodando 🚀");
});

app.post("/slack", async (req, res) => {
  const text = req.body.text;
  const user = req.body.user_name;

  console.log("Mensagem:", text);

  try {
    await axios.post("https://SEU-ENDPOINT-TOQAN", {
      message: text,
      user: user
    });

    return res.send("✅ Post enviado para o Workvivo!");
  } catch (err) {
    console.error(err);
    return res.send("❌ Erro ao enviar.");
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
