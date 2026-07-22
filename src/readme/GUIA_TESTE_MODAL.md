# 🧪 Guia de Teste - Modal de Contato

## 🎯 Como Testar o Modal

O modal está 100% funcional e integrado. Existem múltiplas formas de abri-lo:

### 1️⃣ **Botão WhatsApp no Header (Desktop)**

- Vá ao topo da página
- Clique no botão "WhatsApp" no canto direito do header
- O modal deve abrir centralizado

### 2️⃣ **Botão Flutuante de WhatsApp**

- Observe o botão verde flutuante no canto inferior direito
- Clique nele
- O modal deve abrir

### 3️⃣ **Botões "Falar com um especialista"**

Existem vários ao longo da página:

- Na seção de Benefícios
- Na seção de Coberturas
- Na seção de Depoimentos
- No Footer

### 4️⃣ **Botão "Simular" da Hero**

- No topo da página, grande botão verde

---

## ✅ Checklist de Funcionalidades

### Modal Básico

- [ ] Modal abre ao clicar em qualquer CTA
- [ ] Modal fica centralizado na tela
- [ ] Backdrop semi-transparente aparece
- [ ] Modal fecha ao clicar no X
- [ ] Modal fecha ao clicar fora (no backdrop)
- [ ] Modal não fecha ao clicar dentro do formulário

### Cabeçalho

- [ ] Logo Cantares está visível
- [ ] Logo Suhai está visível
- [ ] Título "Vamos iniciar sua proteção" aparece
- [ ] Subtítulo "Preencha para falar com um corretor agora." aparece

### Formulário - Validações

- [ ] Deixar Nome vazio → mostra erro "Nome completo é obrigatório"
- [ ] Digitar um nome com 1 palavra → mostra erro "Por favor, insira seu nome completo"
- [ ] Digitar um nome completo → sem erro
- [ ] Deixar Telefone vazio → mostra erro "Telefone/WhatsApp é obrigatório"
- [ ] Digitar telefone com menos de 10 dígitos → mostra erro "Telefone inválido"
- [ ] Digitar telefone válido → sem erro
- [ ] Não selecionar seguro → mostra erro "Selecione um tipo de seguro"
- [ ] Selecionar um seguro → sem erro

### Formatação de Telefone

- [ ] Digitar "1199999999" → formata para "(11) 99999-999" (enquanto digita)
- [ ] Digitar "11999999999" → formata para "(11) 99999-9999"
- [ ] Caracteres especiais são ignorados

### Comportamento dos Erros

- [ ] Erro desaparece quando usuário começa a digitar
- [ ] Bordas vermelhas aparecem em campos com erro
- [ ] Fundo levemente avermelhado em campo com erro

### Botão de Envio

- [ ] Botão tem ícone WhatsApp + texto "Continuar no WhatsApp"
- [ ] Botão é desabilitado enquanto carrega
- [ ] Botão mostra "Processando..." enquanto carrega
- [ ] Após submissão, abre WhatsApp em nova aba
- [ ] Mensagem do WhatsApp contém: Nome, Telefone e Tipo de Seguro

### Mensagem de Privacidade

- [ ] Texto "Ao enviar, você concorda com nossa Política de Privacidade"
- [ ] Link "Política de Privacidade" abre em nova aba
- [ ] URL do link é: https://www.cantarescorretora.com.br/politica-privacidade-cookies.php

### Depois do Envio

- [ ] Exibe mensagem de sucesso com ícone
- [ ] Mostra "Obrigado pelo interesse!"
- [ ] Mostra "Em breve um de nossos especialistas entrará em contato."
- [ ] Modal fecha automaticamente após 2 segundos

### Responsividade

- [ ] Modal está bem formatado em desktop
- [ ] Modal está bem formatado em tablet
- [ ] Modal está bem formatado em mobile
- [ ] Inputs são tocáveis em mobile (tamanho mínimo 44x44)
- [ ] Modal não ocupa mais de 95% da tela em mobile

### Estados de Desabilitação

- [ ] Campos ficam desabilitados enquanto está processando
- [ ] Botão fica desabilitado enquanto está processando
- [ ] Cursor muda para not-allowed em campos desabilitados

---

## 📱 Testes de Responsividade

### Desktop (1920px+)

```
npm run dev
Abrir em http://localhost:8081/suhai-seguro-motos/
```

### Tablet (768px - 1024px)

- F12 → Toggle Device Toolbar
- Selecionar "iPad"

### Mobile (320px - 768px)

- F12 → Toggle Device Toolbar
- Selecionar "iPhone 12"

---

## 🔧 Dados de Teste

### Teste 1: Sucesso

```
Nome: João Silva
Telefone: (11) 99999-9999
Seguro: Cobertura completa
```

### Teste 2: Nome Inválido

```
Nome: João
Telefone: (11) 99999-9999
Seguro: Cobertura completa
```

→ Deve mostrar erro de nome

### Teste 3: Telefone Inválido

```
Nome: João Silva
Telefone: (11) 9999
Seguro: Cobertura completa
```

→ Deve mostrar erro de telefone

### Teste 4: Sem Seguro

```
Nome: João Silva
Telefone: (11) 99999-9999
Seguro: (vazio)
```

→ Deve mostrar erro de seguro

---

## 🐛 Troubleshooting

### Modal não abre

- [ ] Verificar se há erros no console (F12)
- [ ] Verificar se npm run dev está rodando
- [ ] Limpar cache do navegador (Ctrl+Shift+Delete)

### Validações não funcionam

- [ ] Verificar se há erros no console
- [ ] Tentar enviar o formulário sem preencher nada
- [ ] Verificar se os campos estão recebendo o foco

### WhatsApp não abre

- [ ] Verificar se está clicando no botão "Continuar no WhatsApp"
- [ ] Verificar se há bloqueador de pop-ups ativo
- [ ] Tentar com JavaScript habilitado

### Modal fica por trás de outros elementos

- [ ] Verificar z-index (40 para backdrop, 50 para modal)
- [ ] Se necessário, aumentar z-index em css

---

## 📊 Performance

### Métricas Esperadas

- [ ] Modal abre em menos de 100ms
- [ ] Validações acontecem em tempo real
- [ ] Animações são suaves (60fps)
- [ ] Nenhum erro no console

---

## ✨ Casos Especiais

### Caso 1: Fechar e Reabrir

1. Abrir modal
2. Preencher dados
3. Fechar clicando no X
4. Reabrir modal

- [ ] Formulário deve estar limpo
- [ ] Erros devem ter desaparecido

### Caso 2: Fechar Clicando Fora

1. Abrir modal
2. Clicar no backdrop

- [ ] Modal deve fechar
- [ ] Dados não devem ser salvos

### Caso 3: Múltiplas Submissões

1. Preencher e enviar
2. Esperar 2 segundos para fechar
3. Reabrir e preencher novamente

- [ ] Deve funcionar sem problemas

---

## 📝 Notas Importantes

- O formulário não salva dados em backend (ainda)
- A mensagem vai direto para WhatsApp
- O telefone é formatado automaticamente
- Todos os campos são obrigatórios
- O modal reseta ao fechar

---

**Tudo pronto para testar!** 🚀
