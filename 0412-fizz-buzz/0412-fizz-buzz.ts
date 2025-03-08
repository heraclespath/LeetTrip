function fizzBuzz(n: number): string[] {
    const result: string[] = [];
    for (let i = 1; i <=n; i++) {
        let current = '';
        if (i % 3 === 0) {
            current += 'Fizz';
        }

        if (i % 5 === 0) {
            current += 'Buzz';
        }

        if (current === '') {
            current = i.toString();
        }
        
        result.push(current);
    }

    return result;
};