{
  "dashboard": {
  "__inputs": [],
  "__requires": [
    {
      "type": "grafana",
      "id": "grafana",
      "name": "Grafana",
      "version": "4.4.2"
    },
    {
      "type": "panel",
      "id": "grafana-piechart-panel",
      "name": "Pie Chart",
      "version": "1.1.5"
    },
    {
      "type": "panel",
      "id": "graph",
      "name": "Graph",
      "version": ""
    },
    {
      "type": "panel",
      "id": "savantly-heatmap-panel",
      "name": "Heatmap",
      "version": "0.2.0"
    }
  ],
  "annotations": {
    "list": []
  },
  "editable": true,
  "gnetId": null,
  "graphTooltip": 0,
  "hideControls": false,
  "id": null,
  "links": [],
  "refresh": false,
  "rows": [
    {
      "collapse": false,
      "height": 240,
      "panels": [
        {
          "chartId": "chart_6",
          "colors": [
            "rgba(50, 172, 45, 1)",
            "rgba(241, 255, 0, 1)",
            "rgba(245, 54, 54, 1)"
          ],
          "datasource": "$DataSource",
          "editable": true,
          "error": false,
          "format": "none",
          "id": 6,
          "legend": {
            "avg": true,
            "current": true,
            "max": true,
            "min": true,
            "show": false,
            "total": true
          },
          "links": [],
          "mappingType": 1,
          "maxDataPoints": 100,
          "nullPointMode": "connected",
          "seriesOverrides": [],
          "span": 12,
          "targets": [
            {
              "expr": "avg by (merchant, service)(RESOURCE_SERV_processing_time)",
              "format": "time_series",
              "interval": "",
              "intervalFactor": 2,
              "legendFormat": "{{merchant}} / {{service}}",
              "metric": "RESOURCE_SERV_processing_time",
              "refId": "A",
              "step": 20
            }
          ],
          "thresholds": "0,3000",
          "timeFrom": null,
          "title": "Hot API",
          "treeMap": {
            "colorByFunction": "avg",
            "debug": false,
            "depth": 0,
            "enableGrouping": true,
            "enableTimeBlocks": false,
            "groups": [
              {
                "key": "server",
                "value": "/^.*./g"
              }
            ],
            "ids": [
              "alias"
            ],
            "mode": "squarify",
            "nodeSizeProperty": "value",
            "sizeByFunction": "avg"
          },
          "type": "savantly-heatmap-panel",
          "valueMaps": [
            {
              "op": "=",
              "text": "N/A",
              "value": "null"
            }
          ]
        }
      ],
      "repeat": null,
      "repeatIteration": null,
      "repeatRowId": null,
      "showTitle": false,
      "title": "New row",
      "titleSize": "h6"
    },
    {
      "collapse": false,
      "height": 267.625,
      "panels": [
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": "$DataSource",
          "editable": true,
          "error": false,
          "fill": 1,
          "grid": {},
          "id": 1,
          "legend": {
            "alignAsTable": false,
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": true,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "seriesOverrides": [],
          "spaceLength": 10,
          "span": 6,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "expr": "avg by (service) (RESOURCE_SERV_processing_time)\n",
              "format": "time_series",
              "interval": "",
              "intervalFactor": 2,
              "legendFormat": "{{service}}",
              "metric": "RESOURCE_SERV_processing_time",
              "refId": "C",
              "step": 2
            }
          ],
          "thresholds": [],
          "timeFrom": null,
          "timeShift": null,
          "title": "Response time by API",
          "tooltip": {
            "msResolution": true,
            "shared": true,
            "sort": 0,
            "value_type": "cumulative"
          },
          "type": "graph",
          "xaxis": {
            "buckets": null,
            "mode": "time",
            "name": null,
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "ms",
              "label": "",
              "logBase": 1,
              "max": null,
              "min": null,
              "show": true
            },
            {
              "format": "short",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": true
            }
          ]
        },
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": "$DataSource",
          "editable": true,
          "error": false,
          "fill": 1,
          "grid": {},
          "id": 5,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": true,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 2,
          "links": [],
          "nullPointMode": "null",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "seriesOverrides": [],
          "spaceLength": 10,
          "span": 6,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "expr": "avg by (service, merchant) (RESOURCE_SERV_processing_time)",
              "format": "time_series",
              "intervalFactor": 2,
              "legendFormat": "{{merchant}} / {{service}}",
              "metric": "RESOURCE_SERV_processing_time",
              "refId": "D",
              "step": 2
            }
          ],
          "thresholds": [],
          "timeFrom": null,
          "timeShift": null,
          "title": "Response time by Client",
          "tooltip": {
            "msResolution": true,
            "shared": true,
            "sort": 0,
            "value_type": "cumulative"
          },
          "type": "graph",
          "xaxis": {
            "buckets": null,
            "mode": "time",
            "name": null,
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "ms",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": true
            },
            {
              "format": "short",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": true
            }
          ]
        }
      ],
      "repeat": null,
      "repeatIteration": null,
      "repeatRowId": null,
      "showTitle": false,
      "title": "Row",
      "titleSize": "h6"
    },
    {
      "collapse": false,
      "height": 293.17498779296875,
      "panels": [
        {
          "aliasColors": {},
          "cacheTimeout": null,
          "combine": {
            "label": "Others",
            "threshold": 0
          },
          "datasource": "$DataSource",
          "editable": true,
          "error": false,
          "fontSize": "80%",
          "format": "ms",
          "id": 3,
          "interval": null,
          "legend": {
            "show": true,
            "values": true
          },
          "legendType": "On graph",
          "links": [],
          "maxDataPoints": 3,
          "nullPointMode": "connected",
          "pieType": "pie",
          "span": 6,
          "strokeWidth": "2",
          "targets": [
            {
              "expr": "avg by (merchant) (RESOURCE_SERV_processing_time)",
              "format": "time_series",
              "intervalFactor": 2,
              "legendFormat": "{{merchant}}",
              "metric": "RESOURCE_SERV_processing_time",
              "refId": "B",
              "step": 21600
            }
          ],
          "timeFrom": "12h",
          "title": "Sum by Client",
          "type": "grafana-piechart-panel",
          "valueName": "current"
        },
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": "$DataSource",
          "editable": true,
          "error": false,
          "fill": 1,
          "grid": {},
          "id": 4,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": true,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 2,
          "links": [],
          "nullPointMode": "null",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "seriesOverrides": [],
          "spaceLength": 10,
          "span": 6,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "expr": "avg (RESOURCE_SERV_processing_time)",
              "format": "time_series",
              "intervalFactor": 2,
              "legendFormat": "Average response time",
              "metric": "",
              "refId": "A",
              "step": 2
            }
          ],
          "thresholds": [],
          "timeFrom": null,
          "timeShift": null,
          "title": "Average response time All Transaction",
          "tooltip": {
            "msResolution": false,
            "shared": true,
            "sort": 0,
            "value_type": "cumulative"
          },
          "type": "graph",
          "xaxis": {
            "buckets": null,
            "mode": "time",
            "name": null,
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "ms",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": true
            },
            {
              "format": "ms",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": true
            }
          ]
        }
      ],
      "repeat": null,
      "repeatIteration": null,
      "repeatRowId": null,
      "showTitle": false,
      "title": "New row",
      "titleSize": "h6"
    },
    {
      "collapse": false,
      "height": "250px",
      "panels": [
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": "$DataSource",
          "editable": true,
          "error": false,
          "fill": 1,
          "grid": {},
          "id": 8,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": true,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 2,
          "links": [],
          "nullPointMode": "null",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "seriesOverrides": [],
          "spaceLength": 10,
          "span": 12,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "expr": "avg by (job) (RESOURCE_SERV_processing_time)",
              "format": "time_series",
              "intervalFactor": 2,
              "legendFormat": "{{job}}",
              "metric": "RESOURCE_SERV_processing_time",
              "refId": "A",
              "step": 2
            }
          ],
          "thresholds": [],
          "timeFrom": null,
          "timeShift": null,
          "title": "Container handle processing time",
          "tooltip": {
            "msResolution": true,
            "shared": true,
            "sort": 0,
            "value_type": "cumulative"
          },
          "type": "graph",
          "xaxis": {
            "buckets": null,
            "mode": "time",
            "name": null,
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "ms",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": true
            },
            {
              "format": "short",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": true
            }
          ]
        }
      ],
      "repeat": null,
      "repeatIteration": null,
      "repeatRowId": null,
      "showTitle": false,
      "title": "New row",
      "titleSize": "h6"
    }
  ],
  "schemaVersion": 14,
  "style": "dark",
  "tags": [],
  "templating": {
    "list": [
      {
        "current": {
          "text": "default",
          "value": "default"
        },
        "datasource": null,
        "hide": 0,
        "includeAll": false,
        "label": "DataSource",
        "multi": false,
        "name": "DataSource",
        "options": [],
        "query": "prometheus",
        "refresh": 1,
        "regex": "",
        "type": "datasource"
      }
    ]
  },
  "time": {
    "from": "now-15m",
    "to": "now"
  },
  "timepicker": {
    "refresh_intervals": [
      "5s",
      "10s",
      "30s",
      "1m",
      "5m",
      "15m",
      "30m",
      "1h",
      "2h",
      "1d"
    ],
    "time_options": [
      "5m",
      "15m",
      "1h",
      "6h",
      "12h",
      "24h",
      "2d",
      "7d",
      "30d"
    ]
  },
  "timezone": "browser",
  "title": "resource_server_processing_time",
  "version": 12
},
  "overwrite": false
}