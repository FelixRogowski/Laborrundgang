var APP_DATA = {
  "scenes": [
    {
      "id": "0-flur-am-labor",
      "name": "Flur am Labor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.8724497559972093,
        "pitch": 0.12233120415237764,
        "fov": 1.5043808829567662
      },
      "linkHotspots": [
        {
          "yaw": -2.7971083080896886,
          "pitch": 0.14230337476549515,
          "rotation": 0,
          "target": "9-flur-am-treppenhaus"
        },
        {
          "yaw": -1.237227124969202,
          "pitch": 0.37637627002008855,
          "rotation": 0,
          "target": "1-eingang-labor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-eingang-labor",
      "name": "Eingang Labor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.9494171938757079,
        "pitch": 0.1496067021067251,
        "fov": 1.5043808829567662
      },
      "linkHotspots": [
        {
          "yaw": 0.004194442329648496,
          "pitch": 0.3844663220214031,
          "rotation": 0,
          "target": "0-flur-am-labor"
        },
        {
          "yaw": 1.2025149711361323,
          "pitch": 0.5314487520078188,
          "rotation": 0,
          "target": "7-cad-und-ki"
        },
        {
          "yaw": -1.8984936165060269,
          "pitch": 0.6748509592468661,
          "rotation": 0,
          "target": "2-3d-drucker"
        },
        {
          "yaw": 2.731361078672771,
          "pitch": 0.3672150850694109,
          "rotation": 0,
          "target": "3-sfm-und-arbeitsplatz"
        },
        {
          "yaw": 2.175232179326569,
          "pitch": 0.25372963724079867,
          "rotation": 0,
          "target": "4-mitsubishi-und-frderband"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3d-drucker",
      "name": "3D Drucker",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.16261439990517346,
        "pitch": 0.38684297060514083,
        "fov": 1.5043808829567662
      },
      "linkHotspots": [
        {
          "yaw": 2.9536917284720126,
          "pitch": 0.7990395906847638,
          "rotation": 0,
          "target": "1-eingang-labor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sfm-und-arbeitsplatz",
      "name": "SFM und Arbeitsplatz",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.04995984575399959,
        "pitch": 0.3868407984746405,
        "fov": 1.5043808829567662
      },
      "linkHotspots": [
        {
          "yaw": -2.0695651790099276,
          "pitch": 0.33052585050054617,
          "rotation": 0,
          "target": "1-eingang-labor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.030413150437519576,
          "pitch": 0.5001578000480116,
          "title": "Modelle für I 4.0<br>",
          "text": "Geiles Ding von Stefan<br>"
        },
        {
          "yaw": -2.9113432857842874,
          "pitch": 0.43859674794336456,
          "title": "Bester Arbeitsplatz<br>",
          "text": "Gehört MIR<br>"
        }
      ]
    },
    {
      "id": "4-mitsubishi-und-frderband",
      "name": "Mitsubishi und Förderband",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.7141330458144068,
        "pitch": 0.15616024376408433,
        "fov": 1.5043808829567662
      },
      "linkHotspots": [
        {
          "yaw": 1.315850951562835,
          "pitch": 0.2519686971097599,
          "rotation": 0,
          "target": "1-eingang-labor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4242745818799705,
          "pitch": 0.21823835175166906,
          "title": "Mitsubishi",
          "text": "Das ist ein Roboter<br>"
        }
      ]
    },
    {
      "id": "5-ltstation",
      "name": "Lötstation",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.023510515648940356,
        "pitch": 0.4715029260868846,
        "fov": 1.5043808829567662
      },
      "linkHotspots": [
        {
          "yaw": -1.6932531543512788,
          "pitch": 0.7151082824147341,
          "rotation": 0,
          "target": "6-werkbank"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-werkbank",
      "name": "Werkbank",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.26743462269186047,
        "pitch": 0.2904571791551618,
        "fov": 1.5043808829567662
      },
      "linkHotspots": [
        {
          "yaw": 1.417539678945836,
          "pitch": 0.5522109571568965,
          "rotation": 0,
          "target": "5-ltstation"
        },
        {
          "yaw": -1.7404086858441197,
          "pitch": 0.6163934384641436,
          "rotation": 0,
          "target": "7-cad-und-ki"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-cad-und-ki",
      "name": "CAD und KI",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.2243511487724721,
        "pitch": 0.18625668074703583,
        "fov": 1.5043808829567662
      },
      "linkHotspots": [
        {
          "yaw": -1.9843187509419593,
          "pitch": 0.4288633192648881,
          "rotation": 0,
          "target": "1-eingang-labor"
        },
        {
          "yaw": 1.4601484742311328,
          "pitch": 0.5029653982102129,
          "rotation": 0,
          "target": "6-werkbank"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-treppenhaus",
      "name": "Treppenhaus",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.06073549875977946,
        "pitch": 0.15890574627114162,
        "fov": 1.5043808829567662
      },
      "linkHotspots": [
        {
          "yaw": 0.21161779555845683,
          "pitch": 0.3973645480921828,
          "rotation": 0,
          "target": "9-flur-am-treppenhaus"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-flur-am-treppenhaus",
      "name": "Flur am Treppenhaus",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.3761686052898323,
        "pitch": 0.1784417151212736,
        "fov": 1.5043808829567662
      },
      "linkHotspots": [
        {
          "yaw": -0.3922140967965433,
          "pitch": 0.17069344184557345,
          "rotation": 0,
          "target": "0-flur-am-labor"
        },
        {
          "yaw": -2.837517091993087,
          "pitch": 0.3684750986069183,
          "rotation": 0,
          "target": "8-treppenhaus"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Labor Didaktik der Technik | 360° Rundgang",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
