+++
author = "Ratul Minhaz"
categories = ["tips", "tech"]
date = 2023-01-20T23:00:00Z
description = "PyCharm's 'Unresolved reference' error on importing with full package path"
draft = true
layout = ""
tags = ["pycharm", "python"]
title = "PyCharm's 'Unresolved reference' error on importing with full package path"

+++
If you use full path in the imports of your Python project, sometimes PyCharm can have trouble identifying the project structure and mark the root package name as "Unresolved reference" error. This is likely to happen when when the project was created manually and/or uses a dependency manager like Poetry.

For example, I have this project structure:

    .
    ├── Dockerfile
    ├── docker-compose.yml
    ├── poetry.lock
    ├── pyproject.toml
    └── src
        └── lei_pipeline
            ├── __init__.py
            ├── dags
            │   ├── __init__.py
            │   └── download_latest_lei.py
            └── utils
                ├── __init__.py
                └── configs.py

In the `./src/leipipeline/dags/download_latest_lei.py` asdad