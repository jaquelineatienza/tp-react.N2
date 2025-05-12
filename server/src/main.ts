import express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'



const app = express()
app.use(morgan('dev'))
app.use(cors({
    origin: "http://localhost:5173", // Asegúrate de que el origen de tu cliente esté permitido
}));
const user: string[] = []

app.get('/:name', (req: Request, res: Response) => {
    const name = req.params.name
    const encontrado: string | undefined = user.find(nombre => nombre === name);

    if (encontrado) {
        res.status(200).json({ msg: "Usuario encontrado", encontrado });
    } else {
        res.status(404).json({ msg: "Usuario no encontrado" });
    }
})
app.post("/:name", (req: Request, res: Response) => {
    const name = req.params.name
    user.push(name);
    res.status(200).json({ msg: 'succes', name })
})
app.listen(3500, () => {
    console.log('the server is listen in the port 3500')
})
