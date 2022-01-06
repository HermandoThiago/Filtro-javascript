let cards = document.querySelector(".cards")
let textSearch = document.getElementById("input-filter")
let span = document.getElementById("zero")
let data = [
    {
        foto: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        nome: "Felipe Thiago",
        setor: "Tecnologia",
        salario: 3500,
        telefone: "(84) 99868-1388"
    },
    {
        foto: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        nome: "Henrique Luiz",
        setor: "Tecnologia",
        salario: 3000,
        telefone: "(84) 99868-1388"
    },
    {
        foto: "https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        nome: "Franscisco Hernandes",
        setor: "Marketing",
        salario: 2200,
        telefone: "(84) 99868-1388"
    },
    {
        foto: "https://images.pexels.com/photos/8068115/pexels-photo-8068115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        nome: "Camila Fernandes",
        setor: "Administração",
        salario: 3200,
        telefone: "(84) 99868-1388"
    },
    {
        foto: "https://images.pexels.com/photos/8294490/pexels-photo-8294490.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        nome: "Luiza Gonçalves",
        setor: "Contabilidade",
        salario: 2600,
        telefone: "(84) 99868-1388"
    },
    {
        foto: "https://images.pexels.com/photos/6339168/pexels-photo-6339168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        nome: "Maria Lorena",
        setor: "Contabilidade",
        salario: 1800,
        telefone: "(84) 99868-1388"
    }
]

data.map((e) => {

    cards.innerHTML += `
    <div class="funcionario-card bg-slate-800 w-full flex items-center justify-center rounded-md h-48 my-2 shadow-lg border-slate-100 border-2">
        <div class="img inline-block bg-slate-900 w-4/12 h-full flex justify-center">
            <img src="`+e.foto+`" alt="foto de funcionario"
                class="rounded-md max-h-full w-full"
            >
        </div>
        <div class="desc inline-block w-10/12 h-full pl-4 bg-slate-800 rounded-md">
            <h2 class="text-2xl font-mono font-bold text-white mb-4 mt-6">`+e.nome+`</h2>
            <h3 class="text-lg font-mono text-white">Setor: `+e.setor+`</h3>
            <h3 class="text-lg font-mono text-white">Salário: R$ `+e.salario+`</h3>
            <h3 class="text-lg font-mono text-white">Telefone: `+e.telefone+`</h3>
        </div>
    </div>
    `
})

textSearch.onkeyup = function(e){

    t = this.value

    r = new RegExp(t,"i")

    for(i in data){
        if(data[i].nome.match(r))
            cards.children[i].removeAttribute("Style")
        else
            cards.children[i].style.display = "none"
    }

}
