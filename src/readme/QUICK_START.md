# 🚀 Quick Start - Modal de Contato

## ⚡ Começar Rápido

### 1. Instalar Dependências

```bash
cd /workspaces/moto-segura-r-pido
npm install
```

### 2. Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

O site estará disponível em: **http://localhost:8081/suhai-seguro-motos/**

### 3. Testar o Modal

Clique em qualquer um dos botões abaixo para ver o modal em ação:

- ✅ Botão "WhatsApp" no header
- ✅ Botão "Simular " na hero
- ✅ Botão "Falar com um especialista" (várias seções)
- ✅ Botão flutuante verde de WhatsApp

---

## 📝 Campos do Formulário

| Campo             | Tipo   | Validação         |
| ----------------- | ------ | ----------------- |
| Nome Completo     | Text   | Mínimo 2 palavras |
| Telefone/WhatsApp | Tel    | 10-11 dígitos     |
| Tipo de Seguro    | Select | Obrigatório       |

---

## 🎯 Tipos de Seguro Disponíveis

1. Roubo e furto
2. Roubo, furto e perda total
3. Cobertura completa
4. Plano personalizado

---

## 📱 Testar Responsividade

### Desktop

```bash
npm run dev
# Abrir em http://localhost:8081/suhai-seguro-motos/
```

### Tablet

- F12 → Toggle Device Toolbar → iPad

### Mobile

- F12 → Toggle Device Toolbar → iPhone 12

---

## 🧪 Teste Rápido

### Sucesso

```
Nome: João Silva
Telefone: (11) 99999-9999
Seguro: Cobertura completa
Clicar "Continuar no WhatsApp"
```

✅ Deve abrir WhatsApp com mensagem pré-preenchida

### Validação de Erro

```
Nome: João (sem sobrenome)
Clicar "Continuar no WhatsApp"
```

❌ Deve exibir: "Por favor, insira seu nome completo"

---

## 🔧 Build para Produção

```bash
npm run build
```

Arquivos compilados em: `dist/`

Para visualizar:

```bash
npm run preview
```

---

## 📂 Estrutura do Modal

```
ContactModal.tsx
├── Estados
│   ├── formData (nome, telefone, seguro)
│   ├── errors (validação)
│   ├── isLoading (processamento)
│   └── isSubmitted (sucesso)
├── Funções
│   ├── formatPhone (formata telefone)
│   ├── validateForm (valida todos os campos)
│   ├── handleChange (atualiza campos)
│   ├── handleSubmit (envia para WhatsApp)
│   └── handleClose (fecha e reseta)
└── Renderização
    ├── Backdrop (clicável)
    ├── Modal (centralizado)
    ├── Header (logos + título)
    ├── Formulário (3 campos)
    └── Privacidade + Link
```

---

## 🔐 Privacidade

O link de política de privacidade é:

```
https://www.cantarescorretora.com.br/politica-privacidade-cookies.php
```

Abre em nova aba ao clicar.

---

## 💬 Mensagem do WhatsApp

Quando o usuário envia o formulário, a seguinte mensagem é enviada:

```
Olá! Meu nome é [NOME].
Telefone: [TELEFONE]
Interesse: [TIPO_DE_SEGURO]

Gostaria de saber mais sobre o seguro de moto.
```

**Exemplo:**

```
Olá! Meu nome é João Silva.
Telefone: (11) 99999-9999
Interesse: Cobertura completa

Gostaria de saber mais sobre o seguro de moto.
```

---

## 🎨 Personalizações Futuras

### Mudar Cores

Abrir: `src/components/ContactModal.tsx`

```tsx
// Botão verde WhatsApp
<button className="bg-[#25D366] hover:bg-[#20ba58]">

// Mudar para outra cor:
<button className="bg-[#FF0000] hover:bg-[#CC0000]">
```

### Adicionar Novo Campo

1. Adicionar em `ContactModal.tsx`
2. Adicionar na interface `FormData`
3. Adicionar validação
4. Incluir na mensagem WhatsApp

### Mudar Tipos de Seguro

Abrir: `src/components/ContactModal.tsx`

```tsx
const insuranceTypes = [
  "Seu tipo 1",
  "Seu tipo 2",
  // ...
];
```

---

## 📚 Documentação Completa

Para mais detalhes, consulte:

- 📄 `MODAL_IMPLEMENTATION.md` - Funcionalidades
- 📄 `ALTERACOES_REALIZADAS.md` - Mudanças técnicas
- 📄 `GUIA_TESTE_MODAL.md` - Como testar
- 📄 `IMPLEMENTACAO_FINAL.md` - Resumo executivo
- 📄 `ARQUIVOS_MODIFICADOS.md` - Lista de arquivos

---

## 🐛 Troubleshooting Rápido

### Modal não abre

1. Verificar console: F12 → Console
2. Limpar cache: Ctrl+Shift+Delete
3. Verificar se `npm run dev` está rodando

### Validação não funciona

1. Clicar fora para perder foco
2. Tentar enviar sem preencher
3. Verificar se há erros no console

### WhatsApp não abre

1. Verificar se tem bloqueador de pop-ups
2. Permitir pop-ups no navegador
3. Testar em outro navegador

---

## ✅ Checklist Pré-Deploy

- [ ] Testar em desktop
- [ ] Testar em tablet
- [ ] Testar em mobile
- [ ] Validações funcionando
- [ ] WhatsApp abre corretamente
- [ ] Sem erros no console
- [ ] Build sem erros
- [ ] Política de privacidade link funciona

---

## 📞 Contato

**Números para WhatsApp:**

- Tel: (11) 2545-0650
- WhatsApp: (11) 93029-0043
- Email: contato@cantarescorretora.com.br

---

## 🎉 Pronto para Começar!

```bash
cd /workspaces/moto-segura-r-pido
npm run dev
```

Abra http://localhost:8081/suhai-seguro-motos/ e teste o modal! 🚀

---

**Última Atualização:** 16 de Janeiro de 2026
