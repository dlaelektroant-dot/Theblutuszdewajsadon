//% color=#0080FF icon="\uf293"
namespace BluAddon {

    //% block="wyślij tekst %txt"
    export function sendText(txt: string) {
        bluetooth.uartWriteString(txt + "\n")
    }

    //% block="temperatura"
    export function getTemp(): number {
        return input.temperature()
    }

}
