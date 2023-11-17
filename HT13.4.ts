function getProcess<T extends Function>(func: T): Function {
    const ArgCount = func.length;
    function createSubFunction(procArgs: unknown[]) {
        return function(this: unknown) {
            const newProcArguments = procArgs.concat(Array.from(arguments));
            if (newProcArguments.length > ArgCount) {
                throw new Error('Много аргументов');
            }
            if (newProcArguments.length === ArgCount) {
                return func.apply(this, newProcArguments);
            }
            return createSubFunction(newProcArguments);
        };
    }
    return createSubFunction([]);
}

interface MapperFunc<I, O> {
    (): MapperFunc<I, O>;
    (input: I[]): O[];
}

interface MapFunc {
    (): MapFunc;
    <I, O>(mapper: (item: I) => O): MapperFunc<I, O>;
    <I, O>(mapper: (item: I) => O, input: I[]): O[];
}

const map = getProcess(<I, O>(fn: (arg: I) => O, input: I[]) => input.map(fn)) as MapFunc;


interface FiltererFunc<I> {
    (): FiltererFunc<I>;
    (input: I[]): I[];
}

interface FilterFunc {
    (): FilterFunc;
    <I>(filterer: (item: I) => boolean): FiltererFunc<I>;
    <I>(filterer: (item: I) => boolean, input: I[]): I[];
}

const filter = getProcess(<I>(fn: (item: I) => boolean, input: I[]) => input.filter(fn)) as FilterFunc;

interface MathArgFunc {
    (): MathArgFunc;
    (b: number): number;
}

interface MathFunc {
    (): MathFunc;
    (a: number): MathArgFunc;
    (a: number, b: number): number;
}

const add = getProcess((a: number, b: number) => a + b) as MathFunc;


const result = add(15,35);
console.log(result);


