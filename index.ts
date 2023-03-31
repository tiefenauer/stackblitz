function isUndefinedOrNullOrEmptyString<T>(value?: T): boolean {
        return value === undefined || value === null || String(value).trim().length === 0 || (value instanceof Array && value.length === 0)
    }

function formatStringsWithSpace(...strings: (string | null | undefined)[]): string {
        return strings.filter(s => !isUndefinedOrNullOrEmptyString(s)).join(' ')
    }
const result = formatStringsWithSpace("one", null, undefined, "", "two")
console.log(result)

  