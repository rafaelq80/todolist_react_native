import  Tarefa from "./Tarefa"

export default interface Categoria{
    id: number
    descricao: string
    tarefas?: Tarefa[] | null
}