import  Tarefa from "./Tarefa"

export default interface Categoria{
    id: number
    descricao: string
    tarefa?: Tarefa | null
}