import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Opciones de configuración de Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
        title: 'API de Pokémon',
        version: '1.0.0',
        description: 'Una API para obtener información sobre Pokémons',
        },
        servers: [
        {
            url: 'http://localhost:3001/api',
            description: 'Servidor de Desarrollo'
        }
        ],
        components: {
        securitySchemes: {
            bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
            }
        }
        },
        security: [{
        bearerAuth: []
        }]
    },
    apis: ['src/routes/pokemon.routes.ts']
    };

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export function setupSwagger(app:any) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}