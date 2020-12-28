jQuery("#simulation")
  .on("click", ".s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b55ccf47-2176-4b99-bcc5-c938719eeeaa",
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b55ccf47-2176-4b99-bcc5-c938719eeeaa",
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
    } else if(jFirer.is("#s-Panel_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b55ccf47-2176-4b99-bcc5-c938719eeeaa",
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
    } else if(jFirer.is("#s-Panel_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b55ccf47-2176-4b99-bcc5-c938719eeeaa",
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
    } else if(jFirer.is("#s-Panel_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b55ccf47-2176-4b99-bcc5-c938719eeeaa",
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
    } else if(jFirer.is("#s-Panel_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b55ccf47-2176-4b99-bcc5-c938719eeeaa",
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
    } else if(jFirer.is("#s-Panel_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b55ccf47-2176-4b99-bcc5-c938719eeeaa",
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
    } else if(jFirer.is("#s-Panel_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b55ccf47-2176-4b99-bcc5-c938719eeeaa",
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
    }
  })
  .on("pageload", ".s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_3" ],
                    "value": {
                      "action": "jimSystemDate"
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
  .on("change", ".s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_6",
                  "property": "jimGetValue"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_9","#s-Dynamic_Panel_5" ],
                    "effect": {
                      "type": "drop",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Input_6",
                "property": "jimGetValue"
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_9","#s-Dynamic_Panel_5" ],
                    "effect": {
                      "type": "drop",
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
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_7",
                  "property": "jimGetValue"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_10","#s-Dynamic_Panel_4","#s-Dynamic_Panel_2","#s-Dynamic_Panel_7" ],
                    "effect": {
                      "type": "drop",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Input_7",
                "property": "jimGetValue"
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_10","#s-Dynamic_Panel_2","#s-Dynamic_Panel_4","#s-Dynamic_Panel_7" ],
                    "effect": {
                      "type": "drop",
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
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "price_min" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_8",
                      "property": "jimGetValue"
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
    } else if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "price_max" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_9",
                      "property": "jimGetValue"
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
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "duration_min" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_10",
                      "property": "jimGetValue"
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
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "duration_max" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_11",
                      "property": "jimGetValue"
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
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_12",
                  "property": "jimGetValue"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_9","#s-Dynamic_Panel_4","#s-Dynamic_Panel_7","#s-Dynamic_Panel_5" ],
                    "effect": {
                      "type": "drop",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Input_12",
                "property": "jimGetValue"
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_9","#s-Dynamic_Panel_4","#s-Dynamic_Panel_7","#s-Dynamic_Panel_5" ],
                    "effect": {
                      "type": "drop",
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
    } else if(jFirer.is("#s-Category_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Category_3",
                  "property": "jimGetSelectedValue"
                },"Precio" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ]
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
  .on("focusin", ".s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 .focusin", function(event, data) {
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
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_1": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_1 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_1 > .borderLayer": {
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
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_2": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_2 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_2 > .borderLayer": {
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
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_3": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_3 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_3 > .borderLayer": {
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
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_4": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_4 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_4 > .borderLayer": {
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
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_8": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_8 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_8 > .borderLayer": {
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
    } else if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_9": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_9 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_9 > .borderLayer": {
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
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_10": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_10 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_10 > .borderLayer": {
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
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_11": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_11 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_11 > .borderLayer": {
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
  .on("focusout", ".s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 .focusout", function(event, data) {
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
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_1": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_1 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_1 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#CED4DA",
                        "border-right-color": "#CED4DA",
                        "border-bottom-color": "#CED4DA",
                        "border-left-color": "#CED4DA"
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
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_2": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_2 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_2 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#CED4DA",
                        "border-right-color": "#CED4DA",
                        "border-bottom-color": "#CED4DA",
                        "border-left-color": "#CED4DA"
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
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_3": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_3 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_3 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#CED4DA",
                        "border-right-color": "#CED4DA",
                        "border-bottom-color": "#CED4DA",
                        "border-left-color": "#CED4DA"
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
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_4": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_4 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_4 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#CED4DA",
                        "border-right-color": "#CED4DA",
                        "border-bottom-color": "#CED4DA",
                        "border-left-color": "#CED4DA"
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
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_8": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_8 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_8 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#CED4DA",
                        "border-right-color": "#CED4DA",
                        "border-bottom-color": "#CED4DA",
                        "border-left-color": "#CED4DA"
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
    } else if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_9": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_9 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_9 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#CED4DA",
                        "border-right-color": "#CED4DA",
                        "border-bottom-color": "#CED4DA",
                        "border-left-color": "#CED4DA"
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
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_10": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_10 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_10 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#CED4DA",
                        "border-right-color": "#CED4DA",
                        "border-bottom-color": "#CED4DA",
                        "border-left-color": "#CED4DA"
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
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_11": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_11 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Input_11 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#CED4DA",
                        "border-right-color": "#CED4DA",
                        "border-bottom-color": "#CED4DA",
                        "border-left-color": "#CED4DA"
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
  .on("mouseenter dragenter", ".s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Panel_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Panel_2 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Panel_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
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
    } else if(jFirer.is("#s-Panel_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Panel_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Panel_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
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
    } else if(jFirer.is("#s-Panel_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Panel_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Panel_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
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
    } else if(jFirer.is("#s-Panel_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Panel_5 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Panel_5 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
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
    } else if(jFirer.is("#s-Panel_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Panel_7 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Panel_7 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
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
    } else if(jFirer.is("#s-Panel_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Panel_8 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Panel_8 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
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
    } else if(jFirer.is("#s-Panel_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Panel_9 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Panel_9 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
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
    } else if(jFirer.is("#s-Panel_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Panel_10 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 #s-Panel_10 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
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
  .on("mouseleave dragleave", ".s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Panel_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Panel_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Panel_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Panel_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Panel_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Panel_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Panel_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Panel_10")) {
      jEvent.undoCases(jFirer);
    }
  })
  .on("variablechange.jim", ".s-49f24a7c-d384-4d61-b3be-ad00b7ff8981 .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimGreaterOrEquals",
                      "parameter": [ "35",{
                        "datatype": "variable",
                        "element": "price_min"
                      } ]
                    },{
                      "action": "jimLessOrEquals",
                      "parameter": [ "35",{
                        "datatype": "variable",
                        "element": "price_max"
                      } ]
                    } ]
                  },{
                    "action": "jimGreaterOrEquals",
                    "parameter": [ "3",{
                      "datatype": "variable",
                      "element": "duration_min"
                    } ]
                  } ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ "3",{
                    "datatype": "variable",
                    "element": "duration_max"
                  } ]
                } ]
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
    } else if(jFirer.is("#s-Panel_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimGreaterOrEquals",
                      "parameter": [ "25",{
                        "datatype": "variable",
                        "element": "price_min"
                      } ]
                    },{
                      "action": "jimLessOrEquals",
                      "parameter": [ "25",{
                        "datatype": "variable",
                        "element": "price_max"
                      } ]
                    } ]
                  },{
                    "action": "jimGreaterOrEquals",
                    "parameter": [ "4",{
                      "datatype": "variable",
                      "element": "duration_min"
                    } ]
                  } ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ "4",{
                    "datatype": "variable",
                    "element": "duration_max"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_3" ]
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
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimGreaterOrEquals",
                      "parameter": [ "15",{
                        "datatype": "variable",
                        "element": "price_min"
                      } ]
                    },{
                      "action": "jimLessOrEquals",
                      "parameter": [ "15",{
                        "datatype": "variable",
                        "element": "price_max"
                      } ]
                    } ]
                  },{
                    "action": "jimGreaterOrEquals",
                    "parameter": [ "5",{
                      "datatype": "variable",
                      "element": "duration_min"
                    } ]
                  } ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ "5",{
                    "datatype": "variable",
                    "element": "duration_max"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_4" ]
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
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimGreaterOrEquals",
                      "parameter": [ "30",{
                        "datatype": "variable",
                        "element": "price_min"
                      } ]
                    },{
                      "action": "jimLessOrEquals",
                      "parameter": [ "30",{
                        "datatype": "variable",
                        "element": "price_max"
                      } ]
                    } ]
                  },{
                    "action": "jimGreaterOrEquals",
                    "parameter": [ "5",{
                      "datatype": "variable",
                      "element": "duration_min"
                    } ]
                  } ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ "5",{
                    "datatype": "variable",
                    "element": "duration_max"
                  } ]
                } ]
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimGreaterOrEquals",
                      "parameter": [ "15",{
                        "datatype": "variable",
                        "element": "price_min"
                      } ]
                    },{
                      "action": "jimLessOrEquals",
                      "parameter": [ "15",{
                        "datatype": "variable",
                        "element": "price_max"
                      } ]
                    } ]
                  },{
                    "action": "jimGreaterOrEquals",
                    "parameter": [ "5",{
                      "datatype": "variable",
                      "element": "duration_min"
                    } ]
                  } ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ "5",{
                    "datatype": "variable",
                    "element": "duration_max"
                  } ]
                } ]
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
    } else if(jFirer.is("#s-Panel_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimGreaterOrEquals",
                      "parameter": [ "15",{
                        "datatype": "variable",
                        "element": "price_min"
                      } ]
                    },{
                      "action": "jimLessOrEquals",
                      "parameter": [ "15",{
                        "datatype": "variable",
                        "element": "price_max"
                      } ]
                    } ]
                  },{
                    "action": "jimGreaterOrEquals",
                    "parameter": [ "5",{
                      "datatype": "variable",
                      "element": "duration_min"
                    } ]
                  } ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ "5",{
                    "datatype": "variable",
                    "element": "duration_max"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_7" ]
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
    } else if(jFirer.is("#s-Panel_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimGreaterOrEquals",
                      "parameter": [ "25",{
                        "datatype": "variable",
                        "element": "price_min"
                      } ]
                    },{
                      "action": "jimLessOrEquals",
                      "parameter": [ "25",{
                        "datatype": "variable",
                        "element": "price_max"
                      } ]
                    } ]
                  },{
                    "action": "jimGreaterOrEquals",
                    "parameter": [ "4",{
                      "datatype": "variable",
                      "element": "duration_min"
                    } ]
                  } ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ "4",{
                    "datatype": "variable",
                    "element": "duration_max"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_8" ]
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
    } else if(jFirer.is("#s-Panel_9")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimGreaterOrEquals",
                      "parameter": [ "15",{
                        "datatype": "variable",
                        "element": "price_min"
                      } ]
                    },{
                      "action": "jimLessOrEquals",
                      "parameter": [ "15",{
                        "datatype": "variable",
                        "element": "price_max"
                      } ]
                    } ]
                  },{
                    "action": "jimGreaterOrEquals",
                    "parameter": [ "5",{
                      "datatype": "variable",
                      "element": "duration_min"
                    } ]
                  } ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ "5",{
                    "datatype": "variable",
                    "element": "duration_max"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_9" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_9" ]
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
    } else if(jFirer.is("#s-Panel_10")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimGreaterOrEquals",
                      "parameter": [ "35",{
                        "datatype": "variable",
                        "element": "price_min"
                      } ]
                    },{
                      "action": "jimLessOrEquals",
                      "parameter": [ "35",{
                        "datatype": "variable",
                        "element": "price_max"
                      } ]
                    } ]
                  },{
                    "action": "jimGreaterOrEquals",
                    "parameter": [ "3",{
                      "datatype": "variable",
                      "element": "duration_min"
                    } ]
                  } ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ "3",{
                    "datatype": "variable",
                    "element": "duration_max"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_10" ]
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