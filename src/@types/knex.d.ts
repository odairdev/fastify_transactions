import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    transactions: {
      id: styring,
      title: string,
      amount: number,
      created_at: string,
      session_id?: string
    }
  }
}