export interface Account {
  id: string
  name: string
  accountNumber: string
  balance: number
  currency: string
  type: 'checking' | 'savings' | 'investment' | 'credit'
}

export interface Transaction {
  id: string
  description: string
  amount: number
  date: string
  type: 'credit' | 'debit'
  category?: string
  accountId: string
}

export interface User {
  id: string
  name: string
  email: string
  phone: string
}

