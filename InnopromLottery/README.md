# Необходимые пакеты
[Node Package Manager](https://nodejs.org/)
[Net Core SDK 2.2+]((https://dotnet.microsoft.com/download))
# Запуск решения
В папке с проектом восстановить зависимости(лучше использовать powershell/все, кроме cmd)

    npm install

Создать базу данных

    dotnet ef database update
И запустить проект
 
    dotnet run
Результат будет [здесь](https://localhost:5001)
