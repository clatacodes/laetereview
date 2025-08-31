import java.io.*;
import java.nio.file.*;
import java.util.*;

public class dictParser 
{

   public static void main(String[] args) 
   {
      String fileName = "dict.txt"; 
   
      try 
      {
         List<String> lines = Files.readAllLines(Paths.get(fileName));
      
         for (String line : lines)
         {
            if (line.trim().isEmpty()) 
               continue; // skip blank lines
            System.out.println(parseLine(line));
         }
      
      } 
      catch (IOException e) 
      {
         e.printStackTrace();
      }
   }

   private static String parseLine(String line) 
   {
      // split main Latin/English parts
      String[] parts = line.split("--");
      if (parts.length < 2) 
         return "{}";
   
      // latin forms
      String latinPart = parts[0].trim();
      String[] latinForms = latinPart.split(",|;"); // split by comma or semicolon
      latinForms = trimAll(latinForms);
   
      // english + figure of speech
      String rest = parts[1].trim();
   
      // check for (verb), (noun), etc.
      String fig = "";
      String conjugation = null;
      String gender = null;
      String genitive = null;
      String declension = null;
   
      int figStart = rest.indexOf("(");
      int figEnd = rest.indexOf(")");
      if (figStart != -1 && figEnd != -1) 
      {
         fig = rest.substring(figStart + 1, figEnd).trim();
         rest = rest.substring(0, figStart).trim();
      }
   
      //  verbs
      if (fig.startsWith("verb")) 
      {
         if (fig.contains("1")) conjugation = "1";
         else if (fig.contains("2")) conjugation = "2";
         else if (fig.contains("3")) conjugation = "3";
         else if (fig.contains("4")) conjugation = "4";
         else conjugation = "irregular";
         fig = "verb";
      }
   
      //  nouns
      if (fig.startsWith("noun")) 
      {
         fig = "noun";
      
         // gender
         String last = latinForms[latinForms.length - 1].toLowerCase();
         if (last.equals("m.")) gender = "M";
         else if (last.equals("f.")) gender = "F";
         else if (last.equals("n.")) gender = "N";
      
         // remove gender
         
         if (gender != null) 
         {
            latinForms = Arrays.copyOf(latinForms, latinForms.length - 1);
         }
      
         // genitive form is usually the 2nd item
         if (latinForms.length > 1) 
         {
            genitive = latinForms[1];
            declension = guessDeclension(genitive);
         }
      }
   
      // english meanings before colon
      String engPart = rest.split(":")[0].trim();
      String[] engForms = trimAll(engPart.split(";"));
   
      // build output
      StringBuilder sb = new StringBuilder();
      sb.append("{ latin: ").append(formatArray(latinForms));
      sb.append(", eng: ").append(formatArray(engForms));
      sb.append(", fig: \"").append(fig).append("\"");
      if (conjugation != null) 
      {
         sb.append(", conjugation: \"").append(conjugation).append("\"");
      }
      if (gender != null) 
      {
         sb.append(", gender: \"").append(gender).append("\"");
      }
      if (genitive != null) 
      {
         sb.append(", genitive: \"").append(genitive).append("\"");
      }
      if (declension != null) 
      {
         sb.append(", declension: \"").append(declension).append("\"");
      }
      sb.append(" }");
   
      return sb.toString();
   }

   private static String[] trimAll(String[] arr) 
   {
      return Arrays.stream(arr).map(String::trim).toArray(String[]::new);
   }

   // format array into ["a", "b", "c"]
   private static String formatArray(String[] arr) 
   {
      StringBuilder sb = new StringBuilder("[");
      for (int i = 0; i < arr.length; i++) 
      {
         sb.append("\"").append(arr[i]).append("\"");
         if (i < arr.length - 1) sb.append(", ");
      }
      sb.append("]");
      return sb.toString();
   }

   private static String guessDeclension(String genitive) 
   {
      if (genitive.endsWith("ae")) 
         return "1";
      if (genitive.endsWith("i")) 
         return "2";
      if (genitive.endsWith("is")) 
         return "3";
      if (genitive.endsWith("us")) 
         return "4";
      if (genitive.endsWith("ei")) 
         return "5";
      return "unknown";
   }
}
