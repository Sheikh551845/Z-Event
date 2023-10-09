<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>ReferenceError: greetign is not defined..</b></summary>
<p>

#### Answer: 

<i></i>
   This means that the variable greetign is not defined. When you attempt to assign an empty object ({}) to an undefined variable, a ReferenceError will be thrown. Therefore, the correct answer is option B
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: NaN



<i>In the provided function sum(a, b), the parameters a and b are not specified to be of a specific data type. When the function is called with sum(1, "2"), JavaScript tries to perform addition with a number (1) and a string ("2"). In this case, JavaScript will attempt to concatenate the string with the number, resulting in the string "12". However, since this is an addition operation, JavaScript will then try to convert "12" back to a number, but it can't do this conversion. As a result, it returns NaN (Not a Number).</i>



</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: ['🍕', '🍫', '🥑', '🍔']

<i>In the code, info.favoriteFood = "🍝"; is reassigning the value of info.favoriteFood to "🍝". This does not affect the original food array. Therefore, food remains ['🍕', '🍫', '🥑', '🍔'] and the correct answer is option A.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: Hi there, undefined

<i>Explanation:

The function sayHi(name) expects an argument name to be passed when it's called. However, in the console.log(sayHi()); statement, the function is called without passing any arguments.

In JavaScript, if a parameter is not provided, it defaults to undefined. Therefore, the function returns "Hi there, undefined", as name inside the template string is undefined. This makes option B the correct answer.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>




In the provided code, count is initially set to 0, and there's an array nums containing [0, 1, 2, 3]. The forEach method iterates over each element in the nums array.

In JavaScript, 0 is considered a falsy value, while all other non-zero numbers are considered truthy. Therefore, when num is 0, the condition in the if statement evaluates to false and count remains unchanged.

When num is 1, the condition evaluates to true, and count is incremented by 1.

When num is 2, the condition evaluates to true again, and count is further incremented by 1.

When num is 3, the condition evaluates to true again, and count is further incremented by 1.

After the loop finishes, count is 3, so the correct answer is option B: 2.





</i>

</p>
</details>
