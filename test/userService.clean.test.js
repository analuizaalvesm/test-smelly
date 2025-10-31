const { UserService } = require("../src/userService");

const dadosUsuarioPadrao = {
  nome: "Fulano de Tal",
  email: "fulano@teste.com",
  idade: 25,
};

describe("UserService - Testes Refatorados (Clean)", () => {
  let userService;

  beforeEach(() => {
    userService = new UserService();
    userService._clearDB();
  });

  test("DADO dados de usuário válidos QUANDO criar o usuário ENTÃO retorna id, nome correto e status 'ativo'", () => {
    const { nome, email, idade } = dadosUsuarioPadrao;

    const usuarioCriado = userService.createUser(nome, email, idade);

    expect(usuarioCriado.id).toBeDefined();
    expect(usuarioCriado.nome).toBe(nome);
    expect(usuarioCriado.status).toBe("ativo");
  });

  test("DADO um usuário existente QUANDO buscar por ID ENTÃO retorna o usuário com os dados esperados", () => {
    const usuario = userService.createUser("Ana", "ana@email.com", 23);

    const resultado = userService.getUserById(usuario.id);

    expect(resultado).toMatchObject({
      nome: "Ana",
      email: "ana@email.com",
      status: "ativo",
    });
  });

  test("DADO um usuário comum QUANDO desativar o usuário ENTÃO retorna true e status 'inativo'", () => {
    const usuarioComum = userService.createUser("Comum", "comum@teste.com", 30);

    const resultado = userService.deactivateUser(usuarioComum.id);
    const usuarioAtualizado = userService.getUserById(usuarioComum.id);

    expect(resultado).toBe(true);
    expect(usuarioAtualizado.status).toBe("inativo");
  });

  test("DADO um usuário administrador QUANDO desativar o usuário ENTÃO retorna false", () => {
    const usuarioAdmin = userService.createUser(
      "Admin",
      "admin@teste.com",
      40,
      true
    );

    const resultado = userService.deactivateUser(usuarioAdmin.id);

    expect(resultado).toBe(false);
  });

  test("DADO vários usuários QUANDO gerar relatório ENTÃO o relatório contém nomes e o cabeçalho", () => {
    userService.createUser("Alice", "alice@email.com", 28);
    userService.createUser("Bob", "bob@email.com", 32);

    const relatorio = userService.generateUserReport();

    expect(relatorio).toContain("Alice");
    expect(relatorio).toContain("Bob");
    expect(relatorio).toContain("Relatório de Usuários");
  });

  test("DADO dados de usuário menor de idade QUANDO tentar criar ENTÃO lança erro sobre maioridade", () => {
    const criarMenor = () =>
      userService.createUser("Menor", "menor@email.com", 17);

    expect(criarMenor).toThrow("O usuário deve ser maior de idade.");
  });
});
