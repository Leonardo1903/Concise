import app from './app'

app.get('/', (c) => c.text('Welcome to Concise API '))

export default app