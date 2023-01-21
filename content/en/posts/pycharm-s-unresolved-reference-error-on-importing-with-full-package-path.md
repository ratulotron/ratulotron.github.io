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

> .
>
> ├── Dockerfile
>
> ├── README.md
>
> ├── data
>
> │   └── _20230113-gleif-concatenated-file-lei2.xml.63c121260196c.zip
>
> ├── dist
>
> │   ├── lei_pipeline-0.1.0-py3-none-any.whl
>
> │   └── lei_pipeline-0.1.0.tar.gz
>
> ├── docker-compose.yml
>
> ├── logs
>
> │   ├── dag_id=lei_init_dag
>
> │   │   └── run_id=scheduled__2023-01-13T00:00:00+00:00
>
> │   │       └── task_id=download_daily_file
>
> │   │           └── attempt=1.log
>
> │   ├── dag_processor_manager
>
> │   │   └── dag_processor_manager.log
>
> │   └── scheduler
>
> │       ├── 2023-01-14
>
> │       │   └── sb_orc
>
> │       │       └── dags
>
> │       │           └── download_latest_lei.py.log
>
> │       ├── 2023-01-21
>
> │       │   ├── lei_pipeline
>
> │       │   │   └── dags
>
> │       │   │       └── download_latest_lei.py.log
>
> │       │   └── sb_orc
>
> │       │       └── dags
>
> │       │           └── download_latest_lei.py.log
>
> │       └── latest -> /opt/airflow/logs/scheduler/2023-01-21
>
> ├── poetry.lock
>
> ├── pyproject.toml
>
> └── src
>
>     └── lei_pipeline
>
>         ├── __init__.py
>
>         ├── __pycache__
>
>         │   ├── __init__.cpython-310.pyc
>
>         │   └── configs.cpython-310.pyc
>
>         ├── dags
>
>         │   ├── __init__.py
>
>         │   ├── __pycache__
>
>         │   │   └── download_latest_lei.cpython-310.pyc
>
>         │   └── download_latest_lei.py
>
>         └── utils
>
>             ├── __init__.py
>
>             ├── __pycache__
>
>             │   ├── __init__.cpython-310.pyc
>
>             │   └── configs.cpython-310.pyc
>
>             └── configs.py