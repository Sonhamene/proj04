let  Cadastro = prompt("Possui cadastro? (S ou N)")
let  Nome = (prompt("insira seu nome"));
let  Idade = Number(prompt("Qual sua idade?"));
let  Acompanhado = (prompt("Esta acompanhado? (S ou N)"));
let  Autorizacao = (prompt("Tem autorização especial (S ou N)"));

if (Cadastro === "N") {
    alert("Acesso negado: usário não cadastrado")
    
} else 

        if (Idade >= 18) {
            alert(`Acesso liberado, bem vindo ${Nome}`)
        } else {
            
            if (Idade < 18 || Autorizacao === "N") {
                alert("Você precisa de autorização adicional")
                
                if (Acompanhado === "S") {
                    alert("Entrada com restrição, precisa de um responsável")
                } else {
                        alert("Acesso negado: menor desacompanhado")
                    }
                }
            }