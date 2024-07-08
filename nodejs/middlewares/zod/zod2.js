const z =require('zod');

// if this is an array string with atleast 1 input, return true, else return false 
// zod can be used without express its independent

function validateInput(arr){
    // const schema = z.array(z.number());
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8)
    })
    const response = schema.safeParse(arr);
    console.log(response)
}

// validateInput([1,2,3]); true
// output:
// { success: true, data: [ 1, 2, 3 ] }

// validateInput(['1',2,3]); // false
// output:
// { success: false, error: [Getter] }

// validateInput({
//     email: 'roni@gmail.com',
//     password: '987654321234'
// })
// output:
// {
//     success: true,
//     data: { email: 'roni@gmail.com', password: '987654321234' }
//   }

validateInput({
    email: 'roniail.com',
    password: '987654321234'
})
// output:
// { success: false, error: [Getter] }


//zod have diffrent primitive also

// {
//     email => string => should look like email
//     password => should look like 8 letters
// }

