jQuery("#simulation")
  .on("click", ".s-b55ccf47-2176-4b99-bcc5-c938719eeeaa .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Ellipse_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "first_filled"
                },"true" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "current_status" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "second_filled"
                },"true" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "current_status" ],
                    "value": "2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "third_filled"
                },"true" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "current_status" ],
                    "value": "3"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "current_status"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "current_status" ],
                    "value": "2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "second_filled" ],
                    "value": "true"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "current_status"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "current_status" ],
                    "value": "3"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "third_filled" ],
                    "value": "true"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/49f24a7c-d384-4d61-b3be-ad00b7ff8981",
                    "transition": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "rgba(255,255,255,0.38)"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_38" ],
                    "value": "Este billete se puede cambiar con una tasa del 20% o cancelar con una tasa del 30% antes de la salida."
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "rgba(66,84,134,0.38)"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_46","#s-Paragraph_45" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_23" ],
                    "value": "15\u20ac"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "rgba(255,255,255,0.38)"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_38" ],
                    "value": "Este billete se puede cambiar con una tasa del 20% o cancelar con una tasa del 30% antes de la salida."
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "rgba(66,84,134,0.38)"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_46","#s-Paragraph_45" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_23" ],
                    "value": "15\u20ac"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_33")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "rgba(255,255,255,0.38)"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_38" ],
                    "value": "Este billete se puede cambiar con una tasa del 20% o cancelar con una tasa del 30% antes de la salida."
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "rgba(66,84,134,0.38)"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_46","#s-Paragraph_45" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_23" ],
                    "value": "15\u20ac"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "rgba(255,255,255,0.38)"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_38" ],
                    "value": "Este billete se puede cambiar con una tasa del 20% o cancelar con una tasa del 30% antes de la salida."
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "rgba(66,84,134,0.38)"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_46","#s-Paragraph_45" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_23" ],
                    "value": "15\u20ac"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "rgba(255,255,255,0.38)"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "rgba(66,84,134,0.38)"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_46","#s-Paragraph_45" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_23" ],
                    "value": "29\u20ac"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_38" ],
                    "value": "Este billete se puede cambiar de manera gratuita o cancelar con una tasa del 5% antes de la salida."
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "rgba(255,255,255,0.38)"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "rgba(66,84,134,0.38)"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_46","#s-Paragraph_45" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_23" ],
                    "value": "29\u20ac"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_38" ],
                    "value": "Este billete se puede cambiar de manera gratuita o cancelar con una tasa del 5% antes de la salida."
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "rgba(255,255,255,0.38)"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "rgba(66,84,134,0.38)"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_46","#s-Paragraph_45" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_23" ],
                    "value": "29\u20ac"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_38" ],
                    "value": "Este billete se puede cambiar de manera gratuita o cancelar con una tasa del 5% antes de la salida."
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_37")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "rgba(255,255,255,0.38)"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "rgba(66,84,134,0.38)"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Panel_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_46","#s-Paragraph_45" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_23" ],
                    "value": "29\u20ac"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_38" ],
                    "value": "Este billete se puede cambiar de manera gratuita o cancelar con una tasa del 5% antes de la salida."
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-b55ccf47-2176-4b99-bcc5-c938719eeeaa .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_46","#s-Paragraph_45" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("change", ".s-b55ccf47-2176-4b99-bcc5-c938719eeeaa .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_61" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ "Tus billetes serán enviados a: ",{
                        "datatype": "property",
                        "target": "#s-Input_1",
                        "property": "jimGetValue"
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_59" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_2",
                        "property": "jimGetValue"
                      },{
                        "action": "jimConcat",
                        "parameter": [ "",{
                          "datatype": "property",
                          "target": "#s-Input_3",
                          "property": "jimGetValue"
                        } ]
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_59" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_3",
                        "property": "jimGetValue"
                      },{
                        "action": "jimConcat",
                        "parameter": [ "",{
                          "datatype": "property",
                          "target": "#s-Input_3",
                          "property": "jimGetValue"
                        } ]
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-b55ccf47-2176-4b99-bcc5-c938719eeeaa .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_1": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_1 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_1 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80BDFF",
                        "border-right-color": "#80BDFF",
                        "border-bottom-color": "#80BDFF",
                        "border-left-color": "#80BDFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_2": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_2 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_2 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80BDFF",
                        "border-right-color": "#80BDFF",
                        "border-bottom-color": "#80BDFF",
                        "border-left-color": "#80BDFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_3": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_3 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_3 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80BDFF",
                        "border-right-color": "#80BDFF",
                        "border-bottom-color": "#80BDFF",
                        "border-left-color": "#80BDFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_4": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_4 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_4 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80BDFF",
                        "border-right-color": "#80BDFF",
                        "border-bottom-color": "#80BDFF",
                        "border-left-color": "#80BDFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_5": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_5 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_5 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80BDFF",
                        "border-right-color": "#80BDFF",
                        "border-bottom-color": "#80BDFF",
                        "border-left-color": "#80BDFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_6": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_6 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_6 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80BDFF",
                        "border-right-color": "#80BDFF",
                        "border-bottom-color": "#80BDFF",
                        "border-left-color": "#80BDFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_7": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_7 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_7 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80BDFF",
                        "border-right-color": "#80BDFF",
                        "border-bottom-color": "#80BDFF",
                        "border-left-color": "#80BDFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_10": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_10 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_10 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80BDFF",
                        "border-right-color": "#80BDFF",
                        "border-bottom-color": "#80BDFF",
                        "border-left-color": "#80BDFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_11": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_11 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_11 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80BDFF",
                        "border-right-color": "#80BDFF",
                        "border-bottom-color": "#80BDFF",
                        "border-left-color": "#80BDFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_12": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_12 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_12 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80BDFF",
                        "border-right-color": "#80BDFF",
                        "border-bottom-color": "#80BDFF",
                        "border-left-color": "#80BDFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_13": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_13 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_13 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80BDFF",
                        "border-right-color": "#80BDFF",
                        "border-bottom-color": "#80BDFF",
                        "border-left-color": "#80BDFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-b55ccf47-2176-4b99-bcc5-c938719eeeaa .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_1",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_1": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_1 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_1 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#E2202C",
                        "border-right-color": "#E2202C",
                        "border-bottom-color": "#E2202C",
                        "border-left-color": "#E2202C"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_1",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_1": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_1 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_1 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#35B736",
                        "border-right-color": "#35B736",
                        "border-bottom-color": "#35B736",
                        "border-left-color": "#35B736"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_2": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_2 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_2 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#E2202C",
                        "border-right-color": "#E2202C",
                        "border-bottom-color": "#E2202C",
                        "border-left-color": "#E2202C"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_2": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_2 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_2 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#35B736",
                        "border-right-color": "#35B736",
                        "border-bottom-color": "#35B736",
                        "border-left-color": "#35B736"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_3": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_3 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_3 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#E2202C",
                        "border-right-color": "#E2202C",
                        "border-bottom-color": "#E2202C",
                        "border-left-color": "#E2202C"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_3": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_3 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_3 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#35B736",
                        "border-right-color": "#35B736",
                        "border-bottom-color": "#35B736",
                        "border-left-color": "#35B736"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_4": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_4 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_4 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#E2202C",
                        "border-right-color": "#E2202C",
                        "border-bottom-color": "#E2202C",
                        "border-left-color": "#E2202C"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_4": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_4 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_4 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#35B736",
                        "border-right-color": "#35B736",
                        "border-bottom-color": "#35B736",
                        "border-left-color": "#35B736"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_5",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_5": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_5 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_5 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#E2202C",
                        "border-right-color": "#E2202C",
                        "border-bottom-color": "#E2202C",
                        "border-left-color": "#E2202C"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_5",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_5": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_5 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_5 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#35B736",
                        "border-right-color": "#35B736",
                        "border-bottom-color": "#35B736",
                        "border-left-color": "#35B736"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_6",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_6": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_6 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_6 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#E2202C",
                        "border-right-color": "#E2202C",
                        "border-bottom-color": "#E2202C",
                        "border-left-color": "#E2202C"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_6",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_6": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_6 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_6 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#35B736",
                        "border-right-color": "#35B736",
                        "border-bottom-color": "#35B736",
                        "border-left-color": "#35B736"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_7",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_7": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_7 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_7 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#E2202C",
                        "border-right-color": "#E2202C",
                        "border-bottom-color": "#E2202C",
                        "border-left-color": "#E2202C"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_7",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_7": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_7 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_7 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#35B736",
                        "border-right-color": "#35B736",
                        "border-bottom-color": "#35B736",
                        "border-left-color": "#35B736"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_10",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_10": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_10 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_10 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#E2202C",
                        "border-right-color": "#E2202C",
                        "border-bottom-color": "#E2202C",
                        "border-left-color": "#E2202C"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_10",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_10": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_10 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_10 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#35B736",
                        "border-right-color": "#35B736",
                        "border-bottom-color": "#35B736",
                        "border-left-color": "#35B736"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_11",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_11": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_11 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_11 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#E2202C",
                        "border-right-color": "#E2202C",
                        "border-bottom-color": "#E2202C",
                        "border-left-color": "#E2202C"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_11",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_11": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_11 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_11 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#35B736",
                        "border-right-color": "#35B736",
                        "border-bottom-color": "#35B736",
                        "border-left-color": "#35B736"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_12",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_12": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_12 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_12 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#E2202C",
                        "border-right-color": "#E2202C",
                        "border-bottom-color": "#E2202C",
                        "border-left-color": "#E2202C"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_12",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_12": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_12 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_12 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#35B736",
                        "border-right-color": "#35B736",
                        "border-bottom-color": "#35B736",
                        "border-left-color": "#35B736"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_13",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_13": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_13 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_13 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#E2202C",
                        "border-right-color": "#E2202C",
                        "border-bottom-color": "#E2202C",
                        "border-left-color": "#E2202C"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_13",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_13": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_13 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Input_13 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#35B736",
                        "border-right-color": "#35B736",
                        "border-bottom-color": "#35B736",
                        "border-left-color": "#35B736"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-b55ccf47-2176-4b99-bcc5-c938719eeeaa .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_4") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Paragraph_4").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Paragraph_4") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Paragraph_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Paragraph_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#007BFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-b55ccf47-2176-4b99-bcc5-c938719eeeaa .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Paragraph_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Paragraph_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#0069D9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-b55ccf47-2176-4b99-bcc5-c938719eeeaa .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_4")) {
      jEvent.undoCases(jFirer);
    }
  })
  .on("variablechange.jim", ".s-b55ccf47-2176-4b99-bcc5-c938719eeeaa .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "current_status") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "current_status"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "current_status"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "first_filled"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #shapewrapper-s-Ellipse_1 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#1779BA"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Line_1": {
                      "attributes": {
                        "stroke": "#1779BA"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Line_1 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#1779BA"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Line_1 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#1779BA"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "current_status") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "current_status"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Ellipse_1": {
                      "attributes": {
                        "stroke-width": "2px"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Ellipse_1 > .borderLayer": {
                      "attributes-ie": {
                        "stroke-width": "2px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "current_status"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Ellipse_1": {
                      "attributes": {
                        "stroke-width": "0px"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Ellipse_1 > .borderLayer": {
                      "attributes-ie": {
                        "stroke-width": "0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "second_filled"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #shapewrapper-s-Ellipse_2 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#1779BA"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Line_1": {
                      "attributes": {
                        "stroke": "#1779BA"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Line_1 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#1779BA"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Line_1 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#1779BA"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "current_status") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "current_status"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Ellipse_2": {
                      "attributes": {
                        "stroke-width": "2px"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Ellipse_2 > .borderLayer": {
                      "attributes-ie": {
                        "stroke-width": "2px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "current_status"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Ellipse_2": {
                      "attributes": {
                        "stroke-width": "0px"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Ellipse_2 > .borderLayer": {
                      "attributes-ie": {
                        "stroke-width": "0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "third_filled"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #shapewrapper-s-Ellipse_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#1779BA"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Line_2": {
                      "attributes": {
                        "stroke": "#1779BA"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Line_2 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#1779BA"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Line_2 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#1779BA"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "current_status") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "current_status"
                },"3" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Ellipse_3": {
                      "attributes": {
                        "stroke-width": "2px"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Ellipse_3 > .borderLayer": {
                      "attributes-ie": {
                        "stroke-width": "2px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "current_status"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Ellipse_3": {
                      "attributes": {
                        "stroke-width": "0px"
                      }
                    }
                  },{
                    "#s-b55ccf47-2176-4b99-bcc5-c938719eeeaa #s-Ellipse_3 > .borderLayer": {
                      "attributes-ie": {
                        "stroke-width": "0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "current_status") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "current_status"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_4" ],
                    "value": "Siguiente paso: Introducir información del pasajero"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "current_status") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "current_status"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_4" ],
                    "value": "Siguiente paso: Introducir datos de pago"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "current_status"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_4" ],
                    "value": "Finalizar"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "current_status") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "current_status"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "current_status"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "current_status") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "current_status"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "current_status"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "current_status") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "current_status"
                },"3" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "current_status"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });