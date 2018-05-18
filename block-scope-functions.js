{
    const foo = () => 1;
    console.log(foo() === 1)
    {
        const foo = () => 2;
        console.log(foo() === 2)
    }
    console.log(foo() === 1)
}
