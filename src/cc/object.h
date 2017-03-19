#ifndef _OBJECT_HEADER_
#define _OBJECT_HEADER_

#include "vector.h"

typedef struct physics_object physics_object;

struct physics_object {
  physics_object* children;
  unsigned int total_children;
  vec3* forces;
  unsigned int total_forces;
  vec3 position;
  unsigned char test;
};

#endif // _OBJECT_HEADER_

