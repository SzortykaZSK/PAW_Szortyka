# Ustawiamy obraz bazowy na oficjalny obraz Node.js
FROM node:latest

# Ustawiamy katalog roboczy w kontenerze
WORKDIR /usr/src/app

# Kopiujemy pliki projektu do katalogu roboczego w kontenerze
COPY package*.json ./
COPY src ./src
COPY prisma ./prisma
COPY build ./build
# Instalujemy zależności
RUN npm install

# Kompilujemy TypeScript


# Egzekucja aplikacji
CMD ["node", "build/src/index.js"]
