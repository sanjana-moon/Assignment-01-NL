# Understanding TypeScript's `any`, `unknown`, and `never` Types

## Introduction

TypeScript's type system has a hierarchy structure that determines how safely data can move through our code. Among them, the three most important and often confusing types are `any`, `never`, and `unknown`. `any` allows any operation, `unknown` requires type checking before use, and `never` represents values that never occur.

## Description

### 1. `any`

`any` bypasses TypeScript’s type-checking mechanism, allowing you to assign any kind of value to a variable, regardless of its actual type.

It disables type checking entirely and allows any operation on a value, which can make other parts of the code less type-safe.

**Example:**

```typescript
let a: any = "hello";
a.toFixed();
```

### 2. `unknown`

`unknown` is a type-safe alternative to `any`. It sits at the top of the type hierarchy because it accepts every value, but TypeScript forces you to narrow it before use. This forces you to prove what the value is before using it.

**Example:**

```typescript
let u: unknown = "hello";

if (typeof u === "string") {
  u.toUpperCase();
}
```

### 3. `never`

The `never` type represents values that will never occur, such as the return type of a function that always throws or the leftover case in an exhaustive check.

It’s typically used for functions that either throw exceptions or have infinite loops (i.e., they never return a value).

It sits at the very bottom of the hierarchy, the empty type. No value can be assigned to `never`, but `never` is assignable to every type.

**Example:**

```typescript
const fail = (msg: string): never => {
  throw new Error(msg);
};
```

## Conclusion

`any` is assignable both ways but disables safety; `unknown` accepts everything but requires narrowing; `never` accepts nothing but is assignable everywhere. Prefer `unknown` for untrusted input because it gives you `any`'s flexibility while keeping the compiler on your side.