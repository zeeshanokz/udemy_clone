"use client";

import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  Flex, 
  VStack, 
  HStack,
  Icon,
} from "@chakra-ui/react";
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  TrendingUp, 
  PlayCircle 
} from "lucide-react";
import { MOCK_COURSES } from "@/lib/mockData";

export default function DashboardPage() {
  // Taking first 3 courses as "In Progress"
  const enrolledCourses = MOCK_COURSES.slice(0, 3).map((course, index) => ({
    ...course,
    progress: [75, 45, 10][index],
    lastAccessed: "2 hours ago"
  }));

  return (
    <Box bg="gray.50" minH="calc(100vh - 80px)" py={8}>
      <Container maxW="container.xl">
        <VStack align="stretch" spacing={8}>
          {/* Header */}
          <Box>
            <Heading size="xl" mb={2}>Welcome back, Alex!</Heading>
            <Text color="gray.600">You've completed 4 courses this month. Keep it up!</Text>
          </Box>

          {/* Stats Overview */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            <StatCard 
              label="Courses in Progress" 
              value="3" 
              icon={BookOpen} 
              color="blue.500" 
            />
            <StatCard 
              label="Hours Spent" 
              value="24.5" 
              icon={Clock} 
              color="purple.500" 
            />
            <StatCard 
              label="Certificates" 
              value="12" 
              icon={Trophy} 
              color="yellow.500" 
            />
            <StatCard 
              label="Learning Streak" 
              value="7 Days" 
              icon={TrendingUp} 
              color="green.500" 
            />
          </SimpleGrid>

          {/* Enrolled Courses */}
          <Box>
            <Flex justify="space-between" align="center" mb={6}>
              <Heading size="lg">My Learning</Heading>
              <Text color="blue.600" fontWeight="bold" cursor="pointer">View all</Text>
            </Flex>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {enrolledCourses.map((course) => (
                <Box 
                  key={course.id} 
                  bg="white" 
                  borderRadius="lg" 
                  overflow="hidden" 
                  boxShadow="sm"
                  border="1px solid"
                  borderColor="gray.200"
                  _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  <Box 
                    h="160px" 
                    bg="gray.200" 
                    backgroundImage={`url(${course.thumbnail})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    position="relative"
                  >
                    <Flex 
                      position="absolute" 
                      inset={0} 
                      bg="blackAlpha.400" 
                      align="center" 
                      justify="center"
                      opacity={0}
                      _hover={{ opacity: 1 }}
                      transition="opacity 0.2s"
                    >
                      <Icon as={PlayCircle} boxSize={12} color="white" />
                    </Flex>
                  </Box>
                  
                  <Box p={5}>
                    <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={1} textTransform="uppercase">
                      {course.category}
                    </Text>
                    <Heading size="md" mb={3} noOfLines={2}>
                      {course.title}
                    </Heading>
                    
                    <VStack align="stretch" spacing={2}>
                      <Flex justify="space-between" fontSize="sm">
                        <Text fontWeight="medium">{course.progress}% Complete</Text>
                        <Text color="gray.500">{course.lastAccessed}</Text>
                      </Flex>
                      <Box h="2" bg="gray.100" borderRadius="full" overflow="hidden">
                        <Box h="full" bg="blue.500" w={`${course.progress}%`} />
                      </Box>
                    </VStack>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

function StatCard({ label, value, icon, color }: any) {
  return (
    <Box 
      bg="white" 
      p={6} 
      borderRadius="xl" 
      boxShadow="sm" 
      border="1px solid" 
      borderColor="gray.100"
    >
      <HStack spacing={4}>
        <Flex 
          p={3} 
          borderRadius="lg" 
          bg={`${color.split('.')[0]}.50`} 
          color={color}
        >
          <Icon as={icon} boxSize={6} />
        </Flex>
        <VStack align="start" spacing={0}>
          <Text fontSize="sm" color="gray.500">{label}</Text>
          <Heading size="md">{value}</Heading>
        </VStack>
      </HStack>
    </Box>
  );
}
