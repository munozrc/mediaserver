# API REST for MediaServer

Example ``data`` for ***movies***:

````json
[
  {
    "id": "4f0de6fb-d40a-414d-9b3e-5ec144d943ff", // uuidv4
    "title": "Title for the movie",
    "year": "2001",
    "imdbRating": 6.8,
    "genre": "Acción/Crimen",
    "synopsis": "",
    "poster": "https://example-poster.jpg",
    "images": [
      "https://example.gif",
      "https://example-2.jpg",
      "https://example-3.jpg"
    ],
    "sources": [
      {
        "path": "D:\\Movies\\example.mkv",
        "subtitles": [
          { 
            "src": "D:\\Movies\\example.vtt",
            "srcLang": "es"
          }
        ]
      }
    ]
  }
]
````

Example ``data`` for ***series***:

````json
[
  {
    "id": "4f0de6fb-d40a-414d-9b3e-5ec144d943ff", // uuidv4
    "title": "Title for the serie",
    "year": "2019",
    "imdbRating": 6.8,
    "genre": "Acción/Aventura/Drama",
    "synopsis": "",
    "poster": "https://example-poster.jpg",
    "images": [
      "https://example.gif",
      "https://example-2.jpg",
      "https://example-3.jpg"
    ],
    "seasons": [
      {
        "season": 1,
        "year": "2019",
        "episodes": [
          {
            "episode": 1,
            "title": "Title for episode",
            "sources": [
              {
                "path": "D:\\Series\\example.mkv",
                "subtitles": [
                  { 
                    "src": "D:\\Series\\example.vtt",
                    "srcLang": "es"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
````