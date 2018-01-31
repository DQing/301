####paper数据结构
```
{
  "name": "react",
  "description": "考察react基础",
  "program": {
    "id": 12,
    "name": "最佳编程之旅"
  },
  "logicPuzzle": {
    "easy": 2,
    "normal": 3,
    "hard": 4
  },
  "sectionList": [
    {
      "type": "homeworkQuiz",
      "title": "编程题",
      "quizzes": [
        {
          "id": 12,
          "title": "javascrpt",
          "stack": "node"
        }
      ]
    },
    {
      "type": "subjectQuiz",
      "title": "主观题",
      "quizzes": [
        {
          "title": "miaoshu",
          "stack": "主观题"
        }
      ]
    },
    {
      "type": "basicQuiz",
      "title": "客观题",
      "quizzes": [
        {
          "type": "blank",
          "title": "miaoshu",
          "stack": "客观题",
          "answer": "answer"
        },
        {
          "type": "radio",
          "title": "miaoshu",
          "stack": "主观题",
          "options": [
            "a",
            "b",
            "c",
            "d"
          ],
          "answer": "a"
        },
        {
          "type": "multipleChoice",
          "title": "miaoshu",
          "stack": "主观题",
          "options": [
            "a",
            "b",
            "c",
            "d"
          ],
          "answer": [
            "a",
            "b"
          ]
        }
      ]
    }
  ]
}
```

####homeworkQuiz 数据结构
```
 [
    {
        "_id": "1",
        "title": "react",
        "stack": "Javascript",
        "creator": "admin",
        "createTime": "2018-1-23",
        "key": '1'
    }, {
        "_id": "2",
        "title": "jersey",
        "stack": "Java+Gradle",
        "creator": "admin",
        "createTime": "2018-1-23",
        "key": '2'
    }, {
        "_id": "3",
        "title": "react",
        "stack": "Javascript",
        "creator": "admin",
        "createTime": "2018-1-23",
        "key": '3'
    }, {
        "_id": "4",
        "title": "react",
        "stack": "Javascript",
        "creator": "admin",
        "createTime": "2018-1-23",
        "key": '4'
    }, {
        "_id": "5",
        "title": "react",
        "stack": "Javascript",
        "creator": "admin",
        "createTime": "2018-1-23",
        "key": '5'
    },
];

```

###programList 数据结构

```
 [
    {
        "_id": "1",
        "title": "react练习",
        "creator": "admin",
        "createTime": "2018-1-23",
    },{
        "_id": "2",
        "title": "nodejs 技术栈",
        "creator": "admin",
        "createTime": "2018-1-23",
    },{
        "_id": "1",
        "title": "react-redux",
        "creator": "admin",
        "createTime": "2018-1-23",
    }
];

```