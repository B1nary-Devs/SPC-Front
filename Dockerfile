# Use uma imagem base Node.js
FROM node:18

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos do projeto
COPY . .

# Instale as dependências
RUN npm install

# Exponha a porta em que o React estará ouvindo
EXPOSE 3000

# Comando para iniciar o React
CMD ["npm", "start"]