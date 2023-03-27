const axios = require('axios')
const assert = require('assert')

describe("Test API", () => {
	// тестовый сценарий для создания нового пользователя
	it('Покупаем собачку', function(done) {
	    axios.put('https://petstore.swagger.io/v2/pet', {
	            "id": 278,
	            "petId": 0,
	            "quantity": 0,
	            "shipDate": "2023-03-25T06:25:05.267+0000",
	            "status": "placed",
	            "complete": true
	        })
	        .then(function(response) {
	            assert.equal(response.status, 200); // проверяем статус код ответа
	            assert.equal(response.data.id, 278); // проверяем имя>
	            done(); // завершаем тестовый сценарий
	        })
	        .catch(function(error) {
	            done(error); // завершаем тестовый сценарий с ошибкой
	        });
	});


	it('Создаем пользователя ', function(done) {
		axios.post('https://petstore.swagger.io/v2/user', {
	        "id": 144,
	        "username": "stasio",
	        "firstName": "string",
	        "lastName": "string",
	        "email": "string@gv.tu",
	        "password": "string",
	        "phone": "1232144",
	        "userStatus": 12
	    }, {
	        headers: {
	            'Content-Type': 'application/json'
	        }
	    })
	    .then(function(response) {
	        assert.equal(response.status, 200); // проверяем статус код ответа
	        done(); // завершаем тестовый сценарий
	    })
	    .catch(function(error) {
	        done(error); // завершаем тестовый сценарий с ошибкой
	    });
	});
});