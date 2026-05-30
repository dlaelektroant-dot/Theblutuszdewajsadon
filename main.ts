//% color=#0080FF icon="\uf293" block="BluAddon"
namespace BluAddon {

    let lastMessage = ""

    bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
        lastMessage = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    })

    //% block="wyślij tekst %text"
    export function sendText(text: string): void {
        bluetooth.uartWriteString(text + "\n")
    }

    //% block="wyślij liczbę %num"
    export function sendNumber(num: number): void {
        bluetooth.uartWriteString("" + num + "\n")
    }

    //% block="ostatnia wiadomość"
    export function lastReceived(): string {
        return lastMessage
    }

    //% block="temperatura bluetooth"
    export function sendTemperature(): void {
        bluetooth.uartWriteString("TEMP:" + input.temperature() + "\n")
    }

    //% block="akcelerometr X"
    export function accelerationX(): number {
        return input.acceleration(Dimension.X)
    }

    //% block="akcelerometr Y"
    export function accelerationY(): number {
        return input.acceleration(Dimension.Y)
    }

    //% block="akcelerometr Z"
    export function accelerationZ(): number {
        return input.acceleration(Dimension.Z)
    }

    //% block="połączony bluetooth"
    export function connected(): boolean {
        return bluetooth.isConnected()
    }
}
