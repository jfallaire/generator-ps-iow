ECHO on
REM Minimal makefile for Sphinx documentation

REM You can set these variables from the command line.

%SOURCEDIR%     = .
%BUILDDIR%      = _build


REM Assuming you committed your stuff using hg workbench or something similar, you should execute this in the command line
hg log > changelog.txt
REM hg log --v

REM You just need to run this line with the right variable values in the command line to build your IOW site.
REM livehtml:
	sphinx-autobuild -b html . _build/html

