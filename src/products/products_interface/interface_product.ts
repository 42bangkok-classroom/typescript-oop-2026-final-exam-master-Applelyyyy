

export interface Products {
    id: number
    customerName: string
    purchaseDate: string
    items: {
      productId: number
      quantity: number
      price: number
    }
    totalPrice: number
}