export interface OperationBodyType {
    type: 'income' | 'expense',
    amount: number,
    date: string,
    comment: string,
    category_id: number
}