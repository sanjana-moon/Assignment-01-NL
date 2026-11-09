# Combining Union (`|`) and Intersection (`&`) Types in TypeScript

## Introduction

TypeScript's Union (`|`) and Intersection (`&`) types help developers create flexible and reusable type definitions. A union allows a value to be one of several types, while an intersection combines multiple types into one. Using them together helps model real-world data more accurately while maintaining type safety.

## Body

**Union (`|`):**

A union type allows a variable to hold a value that matches any one of the specified types.

```typescript
type ID = string | number;

let userId: ID = 101;
userId = "USER-101";
```

**Intersection (`&`):**

An intersection type combines multiple types, requiring an object to contain all their properties.

```typescript
type User = { name: string };
type Identifiable = { id: number };

type UserProfile = User & Identifiable;
```

**Combining Union and Intersection:**

Consider an e-commerce system where an order can be either pending or paid, but both share common information.

```typescript
type BaseOrder = {
  id: string;
  total: number;
};

type PendingOrder = BaseOrder & {
  status: "pending";
};

type PaidOrder = BaseOrder & {
  status: "paid";
  transactionId: string;
};

type Order = PendingOrder | PaidOrder;
```

Here, `&` combines shared order properties with each order type, while `|` allows an order to be either pending or paid.

TypeScript can also narrow the type using the `status` property:

```typescript
function processOrder(order: Order): void {
  if (order.status === "paid") {
    console.log(order.transactionId);
  } else {
    console.log("Awaiting payment");
  }
}
```

## Conclusion

Union types represent alternatives, while intersection types combine requirements. Together, they help developers build flexible, reusable, and type-safe data structures for real-world applications.