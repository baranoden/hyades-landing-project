import React from "react";
import { Box, Text, Heading } from "theme-ui";

export default function SectionHeader({ title, slogan, isWhite }) {
  return (
    <Box sx={{ variant: "sectionHeader" }}>
      <Text
        sx={{
          variant: "sectionHeader.subTitle",
          color: isWhite ? "white" : "primary",
          opacity: isWhite ? 0.7 : 1,
        }}
        as="p"
      >
        {slogan}
      </Text>
      <Heading
        as="h2"
        sx={{
          variant: "sectionHeader.title",
          color: isWhite ? "white" : "heading",
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
