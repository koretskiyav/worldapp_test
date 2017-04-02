# Worldapp test task

>Необходимо реализовать  демку https://jqueryui.com/droppable/#default с помощью только ES6 + Reаct.js не используя готовые решения.

># Disclaimer
>библиотеки styled-components и mobx до этого не использовал - захолось попробовать как альтернативы postcss и redux соответственно

Make sure you have `node v6.9.4` or higher and `npm v3.10.10` or higher
## Development and Hot Reload

#### To run in dev mode:
```sh
npm i
npm start
```

wait console message `webpack: Compiled successfully.`
then visit http://localhost:9090/
>you can change PORT and HOST at file `./config.js`

## Production

#### To run in prod mode:
```sh
npm i
npm run build
```
wait for building, then
```sh
npm run static
```
and visit http://127.0.0.1:8080/

>to run on an another port type: `npm run static -- -p 9999`
