function status(request, response) {
  console.log(`Request content: ${JSON.stringify(request.body)}`);
  response.status(200).json({ chave: "Alunos do curso.dev são pessoas acima da média!" });
}

export default status;
