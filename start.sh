#!/bin/bash
docker-compose -f docker-compose.yml up -d
docker-compose logs -f
