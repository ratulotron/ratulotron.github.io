+++
author = "Ratul Minhaz"
categories = ["tips", "tech"]
date = 2023-01-20T23:00:00Z
description = "PyCharm's 'Unresolved reference' error on importing with full package path"
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
    	├── .airflowignore
        └── lei_pipeline
            ├── __init__.py
            ├── dags
            │   ├── __init__.py
            │   └── download_latest_lei.py
            └── utils
                ├── __init__.py
                └── configs.py

In the `./src/lei_pipeline/dags/download_latest_lei.py` file, I imported the variable `LEI_URL_BASE_PATH` from `./src/lei_pipeline/utils/configs.py` in the following manner, including the full package path:

![](/uploads/pycharm_project_root.png)

This worked just as intended in the Docker image I was building to run Airflow. In the image, this `lei_pipeline` directory is copied to the `/opt/airflow/dags/` directory and Airflow easily picks up the necessary files.

As you can see, PyCharm doesn't consider the folder as a module, because it expects the module root to be the `src` directory. So if the correct import path for this file would be `src.lei_pipeline.utils.configs`. There can be many reasons why you wouldn't use `src` as your Python project's root module, in my case I needed to have an `.airflowignore` file in the root, and use the actual `lei_pipeline` module to be imported in my Airflow Docker image's `dags` folder.

The solution to this is actually pretty simple. All I did was marked the `src` directory as my project source root in PyCharm. Just right click on the root folder and from "Mark directory as" set "Source Root":

![](/uploads/pycharm_project_root_set.png)

Et voilà! For me this was enough for PyCharm to start accurately!

However, in some cases this might not be enough. PyCharm doesn't always update it's references, so you might need to force it to rebuild them. You can do this from `File > Invalidate Caches`

Hopefully this helps someone who has been Googling as cluelessly as I did!