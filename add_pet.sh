read -p "Введите имя домашнего животного: " pet_name

curl -v -X POST "https://petstore.swagger.io/v2/pet"
	-H "Content-Type: application/json"
	-d '{
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "$pet_name",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}'
