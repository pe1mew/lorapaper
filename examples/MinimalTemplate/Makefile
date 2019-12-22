#!/usr/bin/make -f

ARDUINO_DIR		= /usr/share/arduino
ARDMK_DIR		= /usr/share/arduino
ARDMK_PATH		= /usr/bin
AVR_TOOLS_DIR		= /usr
AVRDUDE_CONF		= /etc/avrdude.conf
CPPFLAGS		+= -I/usr/avr/sys-root/include -D __STDC_LIMIT_MACROS
CXXFLAGS_STD            = -std=c++11

ARDUINO_SKETCHBOOK      = ../sketchbook
ARDUINO_LIBS		= Adafruit_GFX SPI EEPROM Wire

BOARD_TAG               = mini
BOARD_SUB               = atmega328
MONITOR_PORT		= /dev/ttyUSB0

include /usr/share/arduino/Arduino.mk

