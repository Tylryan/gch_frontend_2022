#!/usr/bin/bash

sudo apt -y update
sudo apt -y install apache2 git
sudo rm -rf /var/www/html
sudo mv dist/book-store-ui/ /var/www/html


