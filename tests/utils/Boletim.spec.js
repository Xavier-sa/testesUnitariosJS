import { Boletim } from "../../src/utils/Boletim.js";

let boletim;

beforeEach(() => {
  boletim = new Boletim();
});

test("deve adicionar uma nota válida", () => {
  boletim.adicionarNota(8);
  expect(boletim.notas).toContain(8);
});

test("deve lançar erro ao adicionar nota inválida", () => {
  expect(() => boletim.adicionarNota("a")).toThrow(TypeError);
  expect(() => boletim.adicionarNota(-1)).toThrow("Nota deve estar entre 0 e 10");
  expect(() => boletim.adicionarNota(11)).toThrow("Nota deve estar entre 0 e 10");
});

test("deve calcular a média corretamente", () => {
  boletim.adicionarNota(7);
  boletim.adicionarNota(8);
  boletim.adicionarNota(9);
  expect(boletim.calcularMedia()).toBeCloseTo(8);
});

test("deve calcular média correta quando não houver notas", () => {
  expect(boletim.calcularMedia()).toBe(0);
});

test("deve verificar se o aluno está aprovado", () => {
  boletim.adicionarNota(7);
  boletim.adicionarNota(8);
  expect(boletim.verificarAprovacao()).toBe(true);
});

test("deve verificar se o aluno está reprovado com média abaixo da mínima", () => {
  boletim.adicionarNota(5);
  boletim.adicionarNota(6);
  expect(boletim.verificarAprovacao()).toBe(false);
});

test("deve verificar aprovação com média mínima personalizada", () => {
  boletim.adicionarNota(6);
  boletim.adicionarNota(7);
  expect(boletim.verificarAprovacao(6)).toBe(true);
});

test("deve lançar erro ao tentar adicionar nota inválida com tipo errado", () => {
  expect(() => boletim.adicionarNota(NaN)).toThrow(TypeError);
});

test("deve lançar erro se tentar adicionar nota fora do intervalo permitido", () => {
  expect(() => boletim.adicionarNota(15)).toThrow("Nota deve estar entre 0 e 10");
});
