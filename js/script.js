// 2º coisa que eu fiz foi a função que adiciona tarefas
// não tem argumento pq é a própria ação de adição, já pega tudo dentro da função mesmo

function addTask() {

    // 3º foi pegar o titulo da tarefa
    // Aqui vai pegar o valor que estiver no input, ou seja o texto que o usuário digitar
    // selecionei o input que tá com o id de #task-title e o .value no fim é para pegar o valor que estiver nele

    const taskTitle = document.querySelector("#task-title").value;

    // 4º coisa que eu fiz foi a condicional para funcionar a função
    // O if aqui é para verificar se tem um titúlo, se existir um titúlo o codigo prosseguirá
    // No caso se o usuário digitou um nome de tarefa, caso ele tente dar um + sem escrever nada,
    // a função de adicionar a task não vai executar

    if (taskTitle) {

        //clonar template
        // 5º coisa que eu fiz foi clonar o template
        // aqui pega o li que está levando a classe de template e também de hide e clona ele
        // tipo um preset, que vai ser modificado conforme os dados que o usuário inserir 

        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        //adiciona titulo
        // 6º coisa foi adicionar o titulo ao clone do template
        // no caso o span dentro do li que está com a classe de task-title vai receber o valor que o input recebeu
        // no caso o nome da tarefa que o usuário digitou
        //o querySelector aqui está no newtask e não em document, pq está procurando o span dentro do clone do li
        // se fosse document iria modificar o template e não o clone, por isso que está pegando o span direto do li clone (newTask)

        newTask.querySelector(".task-title").textContent = taskTitle;

        // removendo as classes desnecessarias
        // 7º aqui remove as classe do li clone (newTask),  a classe template e a classe hide
        // a classe hide serve para esconder, e a template para servir de preset, se o nosso clone vai passar
        // a ser o original, não precisa da classe template

        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adiciona tarefa na lista
        // 8º aqui eu faço  as adições na lista, fazendo o li clone (newTask) ser adotado pelo ul
        // que está com id de #task-list 

        const list = document.querySelector("#task-list");

        list.appendChild(newTask)

        // Evento de remover tarefas
        // 9º aqui é o evento que está sendo adicionado ao botão de remove, essa função esta aqui por que
        // já vai criar o nosso clone de li que carrega os botões com esse evento
        // por isso está pegando o botão direto do li clone (newTask)

        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function () {
            removeTask(this);
        });

        // evento de completar tarefa
        // 10º aqui é o evento que está sendo adicionado ao botão de add, essa função esta aqui por que
        // já vai criar o nosso clone de li que carrega os botões com esse evento
        // por isso está pegando o botão direto do li clone (newTask)

        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function () {
            doneTask(this);
        })

        // limpar texto
        // 11º isso é para limpar o texto, aqui vai pegar o nosso input do html e limpar apenas o valor dele
        // isso após o usuario digitar, caso não houvesse essa função de limpar o valor
        // quando o usuário digitasse a tarefa iria ficar com o nome da tarefa no input, ao invés do placeholder

        document.querySelector("#task-title").value = "";
    }
}


// função de remover tarefa
// 12º aqui está a função do botão de remover o parametro task vai ser substituido pelo this
// que no caso vai remover o pai do botão, o pai do botão é o li clone (newTask)
// é para isso que serve o parentNode para selecionar o pai 
// vale lembrar que lá na função de adicionar está o evento que vai fazer essa função de remoção funcionar
// no botão remove do li clone

function removeTask(task) {

    task.parentNode.remove(true);

}

// função de completar tarefa
// 13º aqui funciona igual o remove a diferença é que tem o toggle, que funciona como um lig/deslig
// para caso o usuário clicar no done sem querer, é so clicar dnv que ele vai tira o estilo de tarefa done

function doneTask(task) {
    const taskToComplete = task.parentNode

    taskToComplete.classList.toggle("done");
}

// Evento de adicionar a tarefa

// 1º coisa que eu fiz - aqui adiciona a tarefa pegando o botão de submit e colocando um evento com funções 
const addBtn = document.querySelector("#add-btn")

addBtn.addEventListener("click", function (e) {
    e.preventDefault();

    addTask()

})